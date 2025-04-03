// Import the sleep function from the k6 library to pause execution between requests
import { sleep } from 'k6'

// Import the http module from k6 to make HTTP requests
import http from 'k6/http'

// Define the options for the load test
export const options = {
  // Define the stages of the test, simulating a ramp-up and ramp-down of users
  stages: [
    { duration: '1m', target: 20 }, // Ramp up to 20 users over 1 minute
    { duration: '3m', target: 20 }, // Maintain 20 users for 3 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 users over 1 minute
  ],
  // Define thresholds for performance metrics
  thresholds: {
    http_req_failed: ['rate<0.02'], // Ensure that less than 2% of requests fail
    http_req_duration: ['p(95)<2000'], // Ensure that 95% of requests complete in under 2 seconds
  },
  // Define cloud distribution settings for the test
  cloud: {
    distribution: {
      'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 }, // Use 100% of the load from the Ashburn region
    },
  },
}

// The main function that will be executed during the test
export default function main() {
  // Make a GET request to the specified URL
  let response = http.get('https://furniture.com')
  
  // Pause execution for 1 second to simulate user think time
  sleep(1)
}