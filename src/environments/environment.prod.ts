// const baseApiUrl = "https://admin.svpoly.xyz/api";
const baseApiUrl = "https://admin.ptcd-fpl.edu.vn/api";
const authApi = `${baseApiUrl}/auth`;

export const jwtApiUrl = `${baseApiUrl}/v1`;
const publicApiUrl = `${baseApiUrl}/public`;
export const environment = {
  production: true,
  GG_CLIENT_ID: "437095088104-c58gonumb2mu71c1d21ofn6ita2uvqr5.apps.googleusercontent.com",
  GG_CLIENT_SECRET: "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",
  // GG_CLIENT_ID: "723333154556-dbmchqand5vseqtfhskvdo121stiohqd.apps.googleusercontent.com", // tuannda3 config
  // GG_CLIENT_SECRET: "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", // tuannda3 config
  loginUrl: authApi + "/login-token",
  fakeLoginUrl: authApi + "/fake-login",
  publicApiUrl: `${baseApiUrl}/public`,
  sponsorListUrl: `${publicApiUrl}/sponsors`,
  contestListUrl: `${publicApiUrl}/contests`,
  majorListUrl: `${publicApiUrl}/majors`,
  roundListUrl: `${publicApiUrl}/rounds`,
  ExamListUrl: `${publicApiUrl}/semeter/exams`,
  ExamItemPoetry: `${publicApiUrl}/semeter/poetry/oneItem`,
  sliderListUrl: `${publicApiUrl}/sliders`,
  companyListUrl: `${publicApiUrl}/company`,
  recruitment: `${publicApiUrl}/recruitments`,
  capacityListUrl: `${publicApiUrl}/capacity`,
  semeterListUrl: `${publicApiUrl}/semeter`,
  poetryListUrl : `${publicApiUrl}/semeter/poetry`,
  playTopicUrl : `${publicApiUrl}/semeter/playtopic`,
  checkExam : `${publicApiUrl}/semeter/check/exams`,
  postListUrl: `${publicApiUrl}/posts`,
  campusListUrl: `${publicApiUrl}/campuses`,

  // Router API V1
  userListUrl: `${jwtApiUrl}/users`,
  roundV1Url: `${jwtApiUrl}/round`,
  contestV1Url: `${jwtApiUrl}/contest`,
  teamListUrl: `${jwtApiUrl}/teams`,
  takeExamUrl: `${jwtApiUrl}/take-exam`,
  userV1Url: `${jwtApiUrl}/user`
};
