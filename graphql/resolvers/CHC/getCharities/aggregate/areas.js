const aggQuery = () => ({
  terms: {
    field: 'areasOfOperation.id',
    size: 500,
  },
})

const parseResponse = aggregation => {
  const buckets = aggregation.buckets.map(x => ({
    id: `${x.key}`,
    key: `${x.key}`,
    name: `${x.key}`,
    count: x.doc_count,
  }))
  return {
    buckets,
  }
}

module.exports = {
  aggQuery,
  parseResponse,
}