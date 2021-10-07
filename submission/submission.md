# Function documentation

## submission functions (dir: ./submission)

#### Create a Submission

Tạo 1 submision đến judge server với param là 1 object có các key là `language`, `code`, `problemId`.

Chi tiết:

- `language`:

  - `c` cho C
  - `cpp` cho C++
  - `pas` cho Pascal
  - `java` cho Java (testing)
  - `py` cho Python (testing)

- `code`: source code của user
- `problemId`: id của bài tập người dùng nộp

```js
createSubmission({
  language: cpp,
  code: `
  #include <iostream>
  using namespace std;
  int main() {
    int A, B;
    cin >> A >> B;
    cout << A + B;
    return 0;
  }`,
  problemId: 'plus',
});
```

> đoạn `code` trên đã được format để dễ nhìn, tuy nhiên khi nộp bài nên giữ raw data của user

#### Get a submission

Dùng để lấy thông tin submission bằng `submissionId`

Hàm sẽ nhận vào params là id và 1 hàm (callback), callbackFn sẽ được chạy khi lấy xong dữ liệu từ firestore. Nếu không truyền param cho hàm, mặc định sẽ là log data ra console

```js
getSubmission('submission01253', (data) => {
  // data là dữ liệu được trả về: object có các key như 'status', 'score', 'compile_status',...
  // Tham khảo collection 'submissions' trên firestore để biết thêm chi tiết

  console.log(data); // do something with 'data'
});
```

#### Get all submission data

Dùng để lấy toàn bộ submission trên firestore, sẽ đươc cân nhắc update performance

Hàm sẽ nhận vào param là 1 hàm (callback), callbackFn sẽ được chạy khi lấy xong dữ liệu từ firestore. Nếu không truyền param cho hàm, mặc định sẽ là log data ra console

```js
getAllSubmission(function (data) {
  // do something with data
});
```
