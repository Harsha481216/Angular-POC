namespace EmployeeWebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        employeeId = c.String(nullable: false, maxLength: 128),
                        firstName = c.String(),
                        lastName = c.String(),
                        department = c.String(),
                        dateofBirth = c.DateTime(nullable: false),
                        mobileNumber = c.Int(nullable: false),
                        addressField = c.String(),
                    })
                .PrimaryKey(t => t.employeeId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
