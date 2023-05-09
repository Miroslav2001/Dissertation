

export default function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI / 180; // Latitude of the first point in radians
    const φ2 = lat2 * Math.PI / 180; // Latitude of the second point in radians
    const Δφ = (lat2 - lat1) * Math.PI / 180; // Difference in latitude in radians
    const Δλ = (lon2 - lon1) * Math.PI / 180; // Difference in longitude in radians
  
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c; // Distance in meters
    
  
    return distance;
  }