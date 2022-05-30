<template>
  <section id="contactus">
    <h1>CONTACT US</h1>
    <div class="contactusContent">
      <base-card >
        <img
          src="https://www.androidheadlines.com/wp-content/uploads/2020/11/google-call-app-revamped.webp"
          class="callImg"
          alt=""
        />
        <h3 class="contactSpacing">Call Us</h3>
        <p>040-12341234 / 123</p>
      </base-card>
      <base-card>
        <img
          src="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_1280.png"
          class="callImg"
          alt=""
        />
        <h3 class="contactSpacing">Mail Us</h3>
        <p><a target="_blank" href="https://mail.google.com">admin@shahosp.com</a></p>
      </base-card>
    </div>
  </section>
</template>

<style scoped>
#contactus {
  text-align: center;
  padding: 2rem;
}
#contactus h1 {
  padding: 2rem;
}
.contactusContent {
  display: flex;
}
.callImg {
  width: 50px;
  height: 50px;
}
.contactSpacing{
    margin: 1rem;
}
</style>