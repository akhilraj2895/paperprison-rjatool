import React, { useState } from "react";

const formatNumber = (n) => {
  const number = Number(n);

  if (number > 1000) {
    // we want three sig figs
    return (number / 1000).toPrecision(3) + "k";
  } else if (Number.isInteger(number)) {
    // if it's an integer less than 1000, display normally
    return number;
  } else if (number > 1) {
    // round smaller numbers to three sigfigs again
    return number.toPrecision(3);
  } else {
    // no more than two digits after the decimal
    return number.toFixed(2);
  }
};

const PersonIcon = ({ value = 0, label = 0, race = "", scale = 1 }) => {
  const valueRoof = Math.ceil(value);
  const maskHeight = {
    height: `${valueRoof * 100 - value * 100}%`,
  };

  return (
    <div className="icon-chart-data">
      {valueRoof > 0 ? (
        Array(valueRoof)
          .fill(0)
          .map((_, index) => {
            return (
              <div className="icon-chart-data-point" key={index}>
                <svg
                  aria-label="Person"
                  className={`icon-person re-${race}`}
                  title={valueRoof}
                >
                  <use href="/images/sprites.svg#person"></use>
                </svg>
                <span
                  className="icon-chart-data-point-mask"
                  style={valueRoof - 1 === index ? maskHeight : {}}
                >
                  {valueRoof - 1 === index && (
                    <div className="icon-chart-data-label">
                      {formatNumber(label)}
                    </div>
                  )}
                </span>
              </div>
            );
          })
      ) : label > 0 ? (
        <div className="icon-chart-data-point">
          <div className="icon-person icon-person-placeholder" />
          <span className="icon-chart-data-point-mask">
            <div className="icon-chart-data-label">{formatNumber(label)}</div>
          </span>
        </div>
      ) : (
        <div className="icon-chart-data-point">
          <div className="icon-person icon-person-placeholder" />
          <span className="icon-chart-data-point-mask">
            <div className="icon-chart-data-label">N/A</div>
          </span>
        </div>
      )}
    </div>
  );
};

const CHART_DISCLAIMER = {
  n_a: "A displayed value of N/A indicates there are 10 or fewer underlying observations for at least one of the variables needed to compute the metric.",
  zero: "A displayed value of 0.00 means that sufficient data is available, but the value is less than 0.005.",
  pep: "No rate per prior event information is available for arrests because arrests are the beginning of the process.",
};

const MEASUREMENTS = {
  RAW: "Raw numbers",
  RATE: "Rate per population",
  R_PEP: "Rate per prior event point",
  DG: "Disparity gap per population",
  DG_PEP: "Disparity gap per prior event point",
};

const SCALE = {
  100: 10,
  500: 50,
  1000: 100,
  5000: 500,
  10000: 1000,
  50000: 5000,
  100000: 10000,
  500000: 50000,
  1000000: 100000,
  5000000: 500000,
  10000000: 1000000,
};

const scaleDown = (data) => {
  let max = 0;

  // find smallest values present in data
  data.forEach(({ items }) => {
    max = Math.max(...Object.values(items), max);
  });

  let scale = 1;
  while (max * scale < 1) {
    scale *= 10;
  }

  return 1 / scale;
};

const scaleUp = (data) => {
  let max = 0;

  // find largest & smallest values present in data
  data.forEach(({ items }) => {
    max = Math.max(...Object.values(items), max);
  });

  const list = Object.keys(SCALE)
    .map((item) => parseInt(item, 10))
    .concat([max]);
  return SCALE[`${list[list.sort((a, b) => a - b).indexOf(max) + 1]}`];
};

const IconCharInner = ({ chartData, races, base, measurement }) => {
  let disclaimers = {
    n_a: false,
    zero: false,
    pep: measurement.indexOf("prior event point") > -1,
  };

  let scale = 1;

  const isRawNumber = [
    MEASUREMENTS.RAW,
    MEASUREMENTS.RATE,
    MEASUREMENTS.R_PEP,
  ].includes(measurement);

  if (measurement === MEASUREMENTS.RAW) {
    scale = scaleUp(chartData.data);
  } else if (measurement === MEASUREMENTS.RATE) {
    scale = scaleDown(chartData.data);
  }

  const yearData = JSON.parse(
    JSON.stringify({
      ...chartData,
    }),
  );

  const scaledYearData = yearData.data.map((yd) => {
    return {
      label: yd.label,
      items: Object.keys(yd.items).reduce((acc, k) => {
        let _origin = yd.items[k];
        if (scale < 1) {
          _origin /= scale;
        }
        const _scaled = (yd.items[k] / scale).toFixed(2);

        if (_origin < 0.005) {
          if (_origin > 0) {
            disclaimers.zero = true;
          } else {
            disclaimers.n_a = true;
          }
        }

        acc[k] = {
          scaled: _scaled,
          origin: _origin,
          scale,
        };
        return acc;
      }, {}),
    };
  });

  let scaleString = scale.toLocaleString();
  let postScaleString = "";

  if (scale < 1) {
    scaleString = "1";
    postScaleString = "per " + ((1 / scale) * 100).toLocaleString();
  }

  return (
    <div className="icon-chart" key={yearData.year}>
      <h3>
        {yearData.year}
        <div className="chart-meta">
          <div className="chart-scale">
            <PersonIcon value={1} race={base} scale={1} /> {scaleString}{" "}
            {base ? "White Adult" : scale > 1 ? "Adults" : "Adult"}{" "}
            {postScaleString}
          </div>
        </div>
      </h3>
      <div className="icon-chart-races-container">
        {Object.keys(races)
          .filter((raceItem) => raceItem.toLowerCase() !== base)
          .map((raceItem) => {
            return (
              <div className="icon-chart-race-container" key={raceItem}>
                <h4>{races[raceItem]}</h4>
                <div className="icon-chart-rows">
                  {base && (
                    <div className="icon-chart-row">
                      <PersonIcon value={1} race={base} scale={1} label={1} />
                    </div>
                  )}
                  {scaledYearData.map((raceData, raceDataIndex) => {
                    return (
                      <div className="icon-chart-row" key={raceDataIndex}>
                        <div className="icon-chart-label">{raceData.label}</div>
                        <PersonIcon
                          value={raceData?.items[raceItem]?.scaled}
                          race={raceItem}
                          scale={scale}
                          label={raceData?.items[raceItem]?.origin}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div>
        {Object.keys(disclaimers)
          .filter((d) => disclaimers[d])
          .map((d) => (
            <p className="icon-chart-disclaimer">{CHART_DISCLAIMER[d]}</p>
          ))}
      </div>
    </div>
  );
};

const IconCharts = ({ data, races, base, measurement }) => {
  return (
    <div className="icon-charts">
      {data.map((yd, idx) => (
        <IconCharInner
          key={idx}
          chartData={yd}
          races={races}
          base={base}
          measurement={measurement}
        />
      ))}
    </div>
  );
};

export { IconCharts, PersonIcon };
