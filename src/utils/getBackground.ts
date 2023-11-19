export const getBackground = (isDay: number, text: string) => {
  if (text === 'Patchy rain possible' || 'Light rain' || 'Light drizzle') {
      return require('../../../assets/patchy-rain-possible.gif');
    } else if (text === 'Light rain' || 'Light rain shower' || 'Rain') {
      return require('../../../assets/rain.gif');
    }

    if (isDay) {
      if (text === 'Partly cloudy' || 'Overcast') {
        return require('../../../assets/cloudy.gif');
      }

      return require('../../../assets/sunny.gif');
    } else {
      if (text === 'Partly cloudy') {
        return require('../../../assets/partly-cloudy.gif');
      }

      return require('../../../assets/night.gif');
    }
}