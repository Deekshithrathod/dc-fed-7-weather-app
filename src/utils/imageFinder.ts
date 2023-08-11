const getFileNameFromDesc = (weather: string) => {
  let fileName;
  switch (weather) {
    case "Thunderstorm":
      fileName = weather;
      break;
    case "Drizzle":
      fileName = "LightRain";
      break;
    case "Rain":
      fileName = "HeavyRain";
      break;
    case "Snow":
      fileName = weather;
      break;
    case "Clouds":
      fileName = "HeavyCloud";
      break;
    case "Haze":
      fileName = "LightCloud";
      break;

    default:
      fileName = "Clear";
      break;
  }
  return fileName;
};

export default getFileNameFromDesc;
