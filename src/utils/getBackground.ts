/* eslint-disable @typescript-eslint/no-unsafe-return */
export function getBackground(isDay: number, text: string) {
  if (
    text === 'Patchy rain possible' ||
    text === 'Light rain' ||
    text === 'Light drizzle'
  ) {
    return require('../../assets/patchy-rain-possible.gif');
  } else if (text === ('Light rain' || 'Light rain shower' || 'Rain')) {
    return require('../../assets/rain.gif');
  }

  if (isDay) {
    if (text === 'Partly cloudy' || text === 'Overcast' || text === 'Cloudy') {
      return require('../../assets/cloudy.gif');
    } else if (
      text === 'Patchy snow possible' ||
      text === 'Patchy sleet possible' ||
      text === 'Blowing snow' ||
      text === 'Patchy moderate snow' ||
      text === 'Patchy heavy snow' ||
      text === 'Heavy snow'
    ) {
      return require('../../assets/snow.gif');
    }

    return require('../../assets/sunny.gif');
  } else {
    if (text === 'Partly cloudy' || text === 'Overcast' || text === 'Cloudy') {
      return require('../../assets/partly-cloudy.gif');
    } else if (
      text === 'Patchy snow possible' ||
      text === 'Patchy sleet possible' ||
      text === 'Blowing snow' ||
      text === 'Patchy moderate snow' ||
      text === 'Patchy heavy snow' ||
      text === 'Heavy snow'
    ) {
      return require('../../assets/snowy-night.gif');
    }

    return require('../../assets/night.gif');
  }
}
