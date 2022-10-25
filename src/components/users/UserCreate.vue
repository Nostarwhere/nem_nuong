<template>
  <div id="container">
    <div class="sideBar">
      <div class="card-container">
        <!-- <div class="card" @mouseover="onLogEvent">Mouse Over</div> -->
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
    <div class="content">
      <div class="content__top">
        <h1>{{ title }}</h1>
        <a :href="url" class="btn-list"> Danh sách người dùng </a>
      </div>
      <div class="content__body">
        <form action="">
          <div class="body__row">
            <label for="">Họ và tên</label> <br />
            <input type="text" placeholder="Nhập tên đầy đủ của người dùng" />
          </div>
          <div class="gender">

            <input type="radio"> Nam
            <input type="radio" name="" id="">Nữ
          </div>
          <div class="body__row">
            <label for="">Email</label><br />
            <input type="text" placeholder="Nhập email của người dùng" />
          </div>
          <div class="body__row">
            <label for="">Số điện thoại</label><br />
            <input type="text" placeholder="Nhập số điện thoại của người dùng" />
          </div>
          <div class="body__row">
            <label for="">Mật khẩu</label><br />
            <input type="password" />
          </div>
          <div class="buttonList">
            <button type="submit" class="buttonList__btnSubmit">
              Thêm ngay
            </button>
            <a href="" class="buttonList__btn-back" type="button">Trở lại</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  mounted() {
    // console.log('The initial count is ${this.count}.')
  }
}
</script>

<style>
#container {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 50px 0;
}

.sideBar {
  width: 20%;
}

.content {
  width: 80%;
  padding: 0 100px;
}

.content__top .btn-list {
  display: block;
  background-color: gray;
  color: white;
  height: 30px;
  width: 200px;
  border: solid 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}

.sideBar {
  border-right: solid 1px #c7c7c7;
  padding: 0 20px;
}

.content__top a {
  text-decoration: none;
}

.content__body {
  text-align: left;
}

.content__body .body__row {
  margin: 20px 0;
}

.content__body .body__row label {
  font-weight: 700;
}

.content__body .body__row input {
  margin: 5px 0;
  height: 20px;
  width: 80%;
  padding: 10px;
  border: solid 1px #c7c7c7;
  border-radius: 5px;
}

.buttonList {
  display: flex;
  font-size: 15px;
  font-weight: 700;
}

.buttonList .buttonList__btnSubmit {
  border: solid 1px rgb(56, 89, 180);
  border-radius: 5px;
  background-color: rgb(56, 89, 180);
  height: 40px;
  width: 100px;
  color: white;
}

.buttonList .buttonList__btn-back {
  border: solid 1px rgb(255, 0, 0);
  background-color: rgb(255, 0, 0);
  height: 39px;
  width: 100px;
  color: white;
  display: flex;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
}
</style>

