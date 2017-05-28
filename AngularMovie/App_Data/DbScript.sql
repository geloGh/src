
                create table dbo.Categories(                
                        ID int not null primary key identity (1,1),
                        CategoryName nvarchar(50) not null                       
                    );
                

            create table dbo.Movies (
                
                    ID int not null primary key identity (1,1),
                    Title nvarchar(60) not null,                       
                    Link nvarchar(250),
                    Description nvarchar(250) not null,
                    ReleaseDate DateTime not null,
                    Genre varchar (30) not null,
                    Price  numeric(18, 3) not null,
					Rating  nvarchar(5)
                );

				alter table dbo.Movies add constraint UC_Movies unique (Title, ReleaseDate);
				                
				create table dbo.MovieCategories (
				Movie_ID int not null constraint FK_Movies foreign key  references dbo.Movies (ID), 
				Category_ID int not null constraint FK_Categories foreign key  references dbo.Categories (ID),
				constraint PK_MovieCategories primary key (Movie_ID, Category_ID)
				);


				insert dbo.Categories(CategoryName) values
				('Category One'),
				('Category Two'),
				('Category Free'),
				('Category Four');

				
				              

				insert  dbo.Movies (Title, Link, Description,ReleaseDate,Genre,Rating, Price) values
				('When Harry Met Sally', '','N/A', '1989-01-11 00:00:54.000', 'Romantic Comedy','PG', 7990000),
				('Rio Bravo', '','N/A', '1959-04-15 13:04:54.000', 'Western','None', 3990000),
				('Ghostbusters', '','N/A', '1984-03-13 13:04:54.000', 'Comedy','G', 8990000),
				('Allied', '','N/A', '2016-04-15 13:04:54.000', 'Action','PG', 10990000);

				--delete dbo.Movies 

				select * from dbo.Movies 
				select * from dbo.Categories

				insert dbo.MovieCategories (Movie_ID, Category_ID) values
				(1,1),
				(1,2),
				(1,3),
				(2,2),
				(2,4),
				(3,3),
				(4,1);
				

				/*
				drop table dbo.MovieCategories;
				drop table dbo.Categories;
				drop table dbo.Movies;
				*/