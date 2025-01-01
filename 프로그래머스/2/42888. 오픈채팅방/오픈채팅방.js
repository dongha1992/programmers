const ACTION_TYPES = {
    ENTER: 'Enter',
    LEAVE: 'Leave',
    CHANGE: 'Change',
  };

function solution(record) {
  const recordMap = new Map();
  const actions = [];

  const updateUserRecord = (id, name) => {
    if (name) recordMap.set(id, name);
  };

  const getMessage = (type, name) => {
    const messages = {
      [ACTION_TYPES.ENTER]: `${name}님이 들어왔습니다.`,
      [ACTION_TYPES.LEAVE]: `${name}님이 나갔습니다.`,
    };
    return messages[type];
  };

  record.forEach((r) => {
    const [type, id, name] = r.split(' ');
    updateUserRecord(id, name);

    if (type !== ACTION_TYPES.CHANGE) {
      actions.push({ type, id });
    }
  });

  return actions.map(({ type, id }) => getMessage(type, recordMap.get(id)));
}