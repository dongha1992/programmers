function solution(id_list, report, k) {
  const reportCounts = new Map();
  const reportedBy = new Map();
  
  new Set(report).forEach(r => {
    const [reporter, reported] = r.split(' ');
    reportCounts.set(reported, (reportCounts.get(reported) || 0) + 1);
    if (!reportedBy.has(reporter)) reportedBy.set(reporter, new Set());
    reportedBy.get(reporter).add(reported);
  })
  const suspended = new Set([...reportCounts].filter(([, count]) => count >= k).map(([id]) => id));
  
  return id_list.map(id => 
    [...(reportedBy.get(id) || [])].filter(reported => suspended.has(reported)).length)
}