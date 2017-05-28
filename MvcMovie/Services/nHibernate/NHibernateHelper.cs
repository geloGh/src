using System.Configuration;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using MvcMovie.Models;
using NHibernate;
using NHibernate.Tool.hbm2ddl;

namespace MvcMovie.Services.nHibernate
{
    public class NHibernateHelper
    {
        public static ISession OpenSession()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            ISessionFactory sessionFactory = Fluently.Configure()

                .Database(MsSqlConfiguration.MsSql2012.ConnectionString(connectionString)
                        .ShowSql()
                )

                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Movie>())
                .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Category>())

                .ExposeConfiguration(cfg => new SchemaUpdate(cfg).Execute(false, true))
                .BuildSessionFactory();

            return sessionFactory.OpenSession();
        }
    }
}