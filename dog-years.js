let orbitPeriodInEarthY = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};

function age_in_dog_years(planet, dogAge) {
    return (dogAge / 31557600 * orbitPeriodInEarthY[planet] * 7).toFixed(2);
}

console.log(age_in_dog_years("earth", 1000000000));

