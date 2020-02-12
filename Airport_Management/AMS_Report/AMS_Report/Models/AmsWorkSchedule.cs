using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsWorkSchedule
    {
        public int ScheduleId { get; set; }
        public long? PilotId { get; set; }
        public string DailySchedule { get; set; }
        public string WeeklySchedule { get; set; }
        public string MonthlySchedule { get; set; }
        public bool? RescheduleRequest { get; set; }

        public virtual AmsPilot Pilot { get; set; }
    }
}
