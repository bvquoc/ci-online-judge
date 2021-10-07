# Function documentation

## user functions (dir: ./user)

Thao tác trên collection 'users' firebase.

#### Get user data/info

Dùng để lấy dữ liệu của doc là `userId` trong collection `users`

Hàm sẽ nhận vào params là `id` và 1 hàm (`callbackFn`), `callbackFn` sẽ được chạy khi lấy xong dữ liệu từ firestore.

Mỗi doc của collection sẽ chứa 2 field chính là `problems` và `submissions` (có thể thêm các field khác nếu thấy hợp lí)

Chi tiết:

- `problems`: một object có các key là `id` của `problem` đã nộp, value tương ứng là điểm của `problem` đó
- `submissions`: một array chứa các `submissionId` của user

```js
getUserInfo('user012', (data) => {
  console.log(`Data of user ${'user012'}:`, data);
  // Do something...
});
```

#### Update user's data by userId

Cập nhật dữ liệu của doc `userId` trong collection `users`

Hàm sẽ nhận 2 params là `userId` và `data` (`data` là 1 `object`)

```js
/**
 * Update collection 'users' on firestore
 * @param {string} id The of the user want update.
 * @param {object} data The data will merge with current user data
 */
function updateUserById(id, data) {
  if (!id || !data) return;
  db.collection('users')
    .doc(id)
    .update(data)
    .catch((error) => console.log('Error updating document:', error));
}
```
