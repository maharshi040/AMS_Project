using System;
using System.Collections.Generic;

namespace AMS_Report.Models
{
    public partial class AmsFlightPlan
    {
        public int FlightPlanId { get; set; }
        public int? FlightId { get; set; }
        public string DepartureLocation { get; set; }
        public string Waypoints { get; set; }
        public string EstimatedTimeOfArrival { get; set; }
        public string DestinationLocation { get; set; }
        public string AlternateAirports { get; set; }
        public string AircraftInformation { get; set; }
        public string PilotsInformation { get; set; }
        public bool? Status { get; set; }

        public virtual AmsPlane Flight { get; set; }
    }
}
