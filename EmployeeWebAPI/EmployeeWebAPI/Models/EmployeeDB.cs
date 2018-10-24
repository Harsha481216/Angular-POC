namespace EmployeeWebAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class EmployeeDB : DbContext
    {
        // Your context has been configured to use a 'EmployeeDB' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'EmployeeWebAPI.Models.EmployeeDB' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'EmployeeDB' 
        // connection string in the application configuration file.
        public EmployeeDB()
            : base("name=EmployeeDB")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<EmployeeDB, Migrations.Configuration>());
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

         public DbSet<Employee> Employees { get; set; }
    }

    public class Employee
    {
        public string employeeId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string department { get; set; }
        public string dateofBirth { get; set; }
        public string mobileNumber { get; set; }
        public string addressField { get; set; }

    }
}