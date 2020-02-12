using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AMS_Report.Models
{
    public partial class TestContext : DbContext
    {
        public TestContext()
        {
        }

        public TestContext(DbContextOptions<TestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AmsAdmin> AmsAdmin { get; set; }
        public virtual DbSet<AmsFlightPlan> AmsFlightPlan { get; set; }
        public virtual DbSet<AmsHangar> AmsHangar { get; set; }
        public virtual DbSet<AmsHangarStatus> AmsHangarStatus { get; set; }
        public virtual DbSet<AmsManager> AmsManager { get; set; }
        public virtual DbSet<AmsPilot> AmsPilot { get; set; }
        public virtual DbSet<AmsPlane> AmsPlane { get; set; }
        public virtual DbSet<AmsUserFeedback> AmsUserFeedback { get; set; }
        public virtual DbSet<AmsWorkSchedule> AmsWorkSchedule { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=PCIN480249;database=Test;trusted_connection=yes");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<AmsAdmin>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__ams_Admi__4A300117956F1E1E");

                entity.ToTable("ams_Admin");

                entity.Property(e => e.AdminId).HasColumnName("Admin_ID");

                entity.Property(e => e.AltContactNumber).HasColumnName("Alt_Contact_Number");

                entity.Property(e => e.ContactNumber).HasColumnName("Contact_Number");

                entity.Property(e => e.DoB).HasColumnType("date");

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("Email_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("First_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("Last_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.RejectionBit).HasColumnName("rejection_bit");

                entity.Property(e => e.RejectionReason)
                    .HasColumnName("rejection_reason")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<AmsFlightPlan>(entity =>
            {
                entity.HasKey(e => e.FlightPlanId)
                    .HasName("PK__ams_flig__4FA78C64A629418D");

                entity.ToTable("ams_flight_plan");

                entity.Property(e => e.FlightPlanId).HasColumnName("Flight_plan_Id");

                entity.Property(e => e.AircraftInformation)
                    .IsRequired()
                    .HasColumnName("Aircraft_information")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AlternateAirports)
                    .IsRequired()
                    .HasColumnName("Alternate_airports")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DepartureLocation)
                    .IsRequired()
                    .HasColumnName("Departure_location")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DestinationLocation)
                    .IsRequired()
                    .HasColumnName("Destination_location")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EstimatedTimeOfArrival)
                    .IsRequired()
                    .HasColumnName("Estimated_time_of_arrival")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FlightId).HasColumnName("Flight_Id");

                entity.Property(e => e.PilotsInformation)
                    .IsRequired()
                    .HasColumnName("Pilots_information")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Waypoints)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Flight)
                    .WithMany(p => p.AmsFlightPlan)
                    .HasForeignKey(d => d.FlightId)
                    .HasConstraintName("Flight_Id_FK");
            });

            modelBuilder.Entity<AmsHangar>(entity =>
            {
                entity.HasKey(e => e.HangarId)
                    .HasName("PK__ams_Hang__C484D156F64F128D");

                entity.ToTable("ams_Hangar");

                entity.Property(e => e.HangarId).HasColumnName("Hangar_ID");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerAddressLine1)
                    .IsRequired()
                    .HasColumnName("Manager_Address_Line_1")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerAddressLine2)
                    .IsRequired()
                    .HasColumnName("Manager_Address_Line_2")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ManagerId).HasColumnName("Manager_ID");

                entity.Property(e => e.PlaneAlloted).HasColumnName("Plane_alloted");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ZipCode)
                    .IsRequired()
                    .HasColumnName("Zip_Code")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.AmsHangar)
                    .HasForeignKey(d => d.ManagerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Manager_ID_fk");

                entity.HasOne(d => d.PlaneAllotedNavigation)
                    .WithMany(p => p.AmsHangar)
                    .HasForeignKey(d => d.PlaneAlloted)
                    .HasConstraintName("Plane_ID_fk");
            });

            modelBuilder.Entity<AmsHangarStatus>(entity =>
            {
                entity.HasKey(e => e.HangarStatusId)
                    .HasName("PK__ams_Hang__F15B8145608103BD");

                entity.ToTable("ams_Hangar_Status");

                entity.Property(e => e.HangarStatusId).HasColumnName("Hangar_Status_Id");

                entity.Property(e => e.AvailableFromDate)
                    .HasColumnName("Available_From_Date")
                    .HasColumnType("date");

                entity.Property(e => e.AvailableTillDate)
                    .HasColumnName("Available_Till_Date")
                    .HasColumnType("date");

                entity.Property(e => e.HangarId).HasColumnName("Hangar_ID");

                entity.Property(e => e.ManagerId).HasColumnName("Manager_ID");

                entity.Property(e => e.OccupancyFromDate)
                    .HasColumnName("Occupancy_From_Date")
                    .HasColumnType("date");

                entity.Property(e => e.OccupancyTillDate)
                    .HasColumnName("Occupancy_till_date")
                    .HasColumnType("date");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Hangar)
                    .WithMany(p => p.AmsHangarStatus)
                    .HasForeignKey(d => d.HangarId)
                    .HasConstraintName("Hangar_fk");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.AmsHangarStatus)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("Manager_fk");
            });

            modelBuilder.Entity<AmsManager>(entity =>
            {
                entity.HasKey(e => e.ManagerId)
                    .HasName("PK__ams_Mana__AE5FEF4DF157C1B2");

                entity.ToTable("ams_Manager");

                entity.Property(e => e.ManagerId).HasColumnName("Manager_ID");

                entity.Property(e => e.AltContactNumber).HasColumnName("Alt_Contact_Number");

                entity.Property(e => e.ContactNumber).HasColumnName("Contact_Number");

                entity.Property(e => e.DoB).HasColumnType("date");

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("Email_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("First_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("Last_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.RejectionBit).HasColumnName("rejection_bit");

                entity.Property(e => e.RejectionReason)
                    .HasColumnName("rejection_reason")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<AmsPilot>(entity =>
            {
                entity.HasKey(e => e.PilotId)
                    .HasName("PK__ams_Pilo__06662FCFA8CC962E");

                entity.ToTable("ams_Pilot");

                entity.Property(e => e.PilotId).HasColumnName("Pilot_ID");

                entity.Property(e => e.AddressLine1)
                    .IsRequired()
                    .HasColumnName("Address_Line_1")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine2)
                    .IsRequired()
                    .HasColumnName("Address_Line_2")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LicenseNumber)
                    .IsRequired()
                    .HasColumnName("License_Number")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.RejectionBit).HasColumnName("rejection_bit");

                entity.Property(e => e.RejectionStatus)
                    .HasColumnName("rejection_status")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ScheduleStatus).HasColumnName("schedule_status");

                entity.Property(e => e.Ssn).HasColumnName("SSN");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.ZipCode)
                    .IsRequired()
                    .HasColumnName("Zip_Code")
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AmsPlane>(entity =>
            {
                entity.HasKey(e => e.PlaneId)
                    .HasName("PK__ams_Plan__19CF69EF38CA09D3");

                entity.ToTable("ams_Plane");

                entity.Property(e => e.PlaneId).HasColumnName("Plane_ID");

                entity.Property(e => e.HangerStatus)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OwnerContactNumber).HasColumnName("Owner_Contact_Number");

                entity.Property(e => e.OwnerEmail)
                    .IsRequired()
                    .HasColumnName("Owner_Email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OwnerFirstName)
                    .IsRequired()
                    .HasColumnName("Owner_First_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OwnerId).HasColumnName("Owner_ID");

                entity.Property(e => e.OwnerLastName)
                    .IsRequired()
                    .HasColumnName("Owner_Last_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlaneCapacity).HasColumnName("Plane_Capacity");

                entity.Property(e => e.PlaneType)
                    .IsRequired()
                    .HasColumnName("Plane_Type")
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AmsUserFeedback>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__ams_User__206D9190BDE73B18");

                entity.ToTable("ams_User_Feedback");

                entity.Property(e => e.UserId).HasColumnName("User_ID");

                entity.Property(e => e.Comments)
                    .IsRequired()
                    .HasColumnName("comments")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AmsWorkSchedule>(entity =>
            {
                entity.HasKey(e => e.ScheduleId)
                    .HasName("PK__ams_Work__8C4D3C5BF39299DB");

                entity.ToTable("ams_Work_schedule");

                entity.Property(e => e.ScheduleId).HasColumnName("Schedule_Id");

                entity.Property(e => e.DailySchedule)
                    .IsRequired()
                    .HasColumnName("Daily_schedule")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MonthlySchedule)
                    .IsRequired()
                    .HasColumnName("Monthly_schedule")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PilotId).HasColumnName("Pilot_Id");

                entity.Property(e => e.RescheduleRequest).HasColumnName("Reschedule_request");

                entity.Property(e => e.WeeklySchedule)
                    .IsRequired()
                    .HasColumnName("Weekly_schedule")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Pilot)
                    .WithMany(p => p.AmsWorkSchedule)
                    .HasForeignKey(d => d.PilotId)
                    .HasConstraintName("Pilot_Id_FK");
            });
        }
    }
}
