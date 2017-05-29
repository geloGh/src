using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using Castle.DynamicProxy;
using log4net;

namespace MvcMovie.App_Start
{
    public class Log4NetInterceptor : IInterceptor
    {
        private readonly ThreadLocal<ConcurrentDictionary<Exception, Exception>> _capturedExceptions = new ThreadLocal<ConcurrentDictionary<Exception, Exception>>((Func<ConcurrentDictionary<Exception, Exception>>)(() => new ConcurrentDictionary<Exception, Exception>()));

        private readonly ILog _log;

        public Log4NetInterceptor()
        {
        }

        public Log4NetInterceptor(ILog log)
        {
            this._log = log;
        }

        public void Intercept(IInvocation invocation)
        {
            this._capturedExceptions.Value.Clear();

            ILog log = this._log ?? LogManager.GetLogger(invocation.TargetType);
            

            string methodName = $"{ invocation.TargetType.Name}.{ invocation.Method.Name}";
            try
            {
                List<string> list = invocation.Method.GetParameters()
                    .Select((Func<ParameterInfo, string>)(p => p.Name)).ToList<string>();

                object[] arguments = invocation.Arguments;

                StringBuilder stringBuilder = new StringBuilder($"{ methodName}(");

                for (int index = 0; index < list.Count; ++index)
                {
                    string str = list[index];
                    object obj =  arguments[index];
                    stringBuilder.AppendFormat("{0}<{1}>:<{2}>", index > 0 ? "," : "", str, obj);
                }

                stringBuilder.Append(");");
                log.Debug(stringBuilder);

                invocation.Proceed();

                log.DebugFormat(
                    $"Method { methodName} returned <{(invocation.Method.ReturnType != typeof(void) ? invocation.ReturnValue : (object) "void")}>");
            }
            catch (Exception ex)
            {
                if (!this._capturedExceptions.Value.ContainsKey(ex))
                {
                    this._capturedExceptions.Value[ex] = ex;
                }
                throw;
            }
        }
    }
}