import { judge } from './judge.js';

const submissionApi = {
  create(data) {
    const url = 'submissions/?base64_encoded=false&wait=false';
    return judge.post(url, data);
  },
  get(token) {
    if (!token) throw new Error('Invalid submission token!');
    const url = `submissions/${token}?base64_encoded=false&fields=status_id,language_id,stdout`;
    return judge.get(url);
  },
};
export { submissionApi };

// const baseURL = 'http://165.227.127.96:2358/';

// function getSubmission(token = '8665f497-a903-45ab-85c0-a0401612862e') {
//   var config = {
//     method: 'get',
//     url: `${baseURL}submissions/${token}?base64_encoded=false&fields=status_id,stdout`,
//     headers: {},
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// async function submitCode(source_code, language_id, expected_output, stdin = '') {
//   const data = JSON.stringify({
//     source_code,
//     language_id,
//     stdin,
//     expected_output,
//   });

//   const config = {
//     method: 'post',
//     url: `${baseURL}submissions/?base64_encoded=false&wait=false`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   };

//   await axios(config)
//     .then((response) => {
//       const token = response.data.token;
//       setTimeout(() => getSubmission(token), 1200);
//     })
//     .catch((error) => console.log(error));
// }
// submitCode('#include <stdio.h>\nint main(void) {\n  printf("hello");\n  return 0;}', 48, 'hello');
