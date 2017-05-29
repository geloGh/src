using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using log4net.Config;
using MvcMovie.App_Start;

namespace MvcMovie
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // Register Inversion of Control dependencies
            IoCConfig.RegisterDependencies();


            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //Log4Net
            XmlConfigurator.Configure();
        }
    }
}
