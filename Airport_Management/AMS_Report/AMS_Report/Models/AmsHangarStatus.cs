using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsHangarStatus
    {
        public int HangarStatusId { get; set; }
        public long? HangarId { get; set; }
        public long? ManagerId { get; set; }
        public string Status { get; set; }
        public DateTime OccupancyFromDate { get; set; }
        public DateTime OccupancyTillDate { get; set; }
        public DateTime AvailableFromDate { get; set; }
        public DateTime AvailableTillDate { get; set; }

        public virtual AmsHangar Hangar { get; set; }
        public virtual AmsManager Manager { get; set; }
    }
}
