class CounterService {
  constructor () {
    this.counters = {};
  }

  saveCounterValue (id, val) {
    this.counters[id] = val;
  }

  getCounterValue (id) {
    return this.counters[id] || 0;
  }
}

const service = new CounterService();
export default service;

