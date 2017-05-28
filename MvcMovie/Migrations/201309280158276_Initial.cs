namespace MvcMovie.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Category = c.String(maxLength: 50),                        
                    })
                .PrimaryKey(t => t.ID);

            CreateTable(
                "dbo.Movies",
                c => new
                {
                    ID = c.Int(nullable: false, identity: true),
                    Title = c.String(),
                    Link = c.String(nullable: true),
                    Description = c.String(maxLength: 250),
                    ReleaseDate = c.DateTime(nullable: false),
                    Genre = c.String(),
                    Rating = c.String(),
                    Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                })
                .PrimaryKey(t => t.ID);


        }

        public override void Down()
        {
            DropTable("dbo.Movies");
            DropTable("dbo.Categories");
        }
    }
}
