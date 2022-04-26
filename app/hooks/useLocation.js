import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await Location.getBackgroundPermissionsAsync();
      if (!granted)
        alert("you need to enable the permission to access the library...");
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  return location;
};
