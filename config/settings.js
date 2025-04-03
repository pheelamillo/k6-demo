


const EnvConfig = {
  dev: {
    BASE_URL: 'http://fdc-dev.com', 
    MY_FLAG: true
  },
  qa: {
    BASE_URL: 'http://fdc-qa.com',
    MY_FLAG: true
  },
  stage: {
    BASE_URL: 'http://fc-stage.com',
    MY_FLAG: false
  },
  prod: {
    BASE_URL: 'https://furniture.com',
    MY_FLAG: false
  }
};

const Config = EnvConfig[__ENV.ENVIRONMENT] || EnvConfig['dev'];
const BASE_URL = Config.BASE_URL;



//To run on enironments:
// k6 run -e ENVIRONMENT=prod -e WORKLOAD=stress test.js
// k6 run -e ENVIRONMENT=qa -e WORKLOAD=average new_test.js
