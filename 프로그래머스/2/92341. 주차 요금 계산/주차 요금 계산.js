function solution(fees, records) {
const [defaultMinute, defaultFee, unit, feeByUnit] = fees;
  const LIMIT = '23:59';
  const recordMap = new Map();

  records.forEach((record) => {
    const [time, car, type] = record.split(' ');
    updateTime(car, time, type === 'IN');
  });

  function updateTime(car, time, isIn) {
    const minute = getMinute(time);
    const carInfo = recordMap.get(car) || {
      totalMin: 0,
      latestEnteringTime: null,
    };

    if (isIn) {
      carInfo.latestEnteringTime = minute;
    } else {
      carInfo.totalMin += minute - carInfo.latestEnteringTime;
      carInfo.latestEnteringTime = null;
    }

    recordMap.set(car, carInfo);
  }
  
  console.log(recordMap)
  
  function getMinute (timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  };

  function calculateFee (minute) {
    if (minute <= defaultMinute) return defaultFee;
    return Math.ceil((minute - defaultMinute) / unit) * feeByUnit + defaultFee;
  };

  function getTotalFee() {
    const limitMinute = getMinute(LIMIT);
    return [...recordMap].map(([car, info]) => {
      if (info.latestEnteringTime !== null) {
        info.totalMin += limitMinute - info.latestEnteringTime;
      }
      return [calculateFee(info.totalMin), car];
    });
  }

  function getSortByCarNumber(list) {
    return list.sort((a, b) => Number(a[1]) - Number(b[1]));
  }

  function pluckByKey(list, key) {
    return list.map(([key]) => key);
  }

  return pluckByKey(getSortByCarNumber(getTotalFee()), 'fee');
}