<template>
  <div class="pageSetup">
    <nav>
      <ul>
        <!-- <li><router-link to="/adminDash/profile">Profile</router-link></li> -->
        <li><router-link to="/adminDash/registerDoctor">Register Doctor</router-link></li>
        <li>
          <router-link to="/adminDash/addpackage">Add Package</router-link>
        </li>
        <!-- <li><router-link to="/adminDash/report">Report</router-link></li> -->
      </ul>
    </nav>
    <section>
        <base-card>
            <router-view></router-view>   
        </base-card>
    </section>
  </div>
</template>

<style scoped>
.pageSetup {
  width: 100%;
  /* display: contents; */
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
}
nav ul {
  /* width:100%; */
  /* display: flex; */
  list-style: none;
  margin: 2rem 10rem 2rem 2rem;
  
}
a {
  text-decoration: none;
  padding: 0.4rem 0.5rem;
}

a:hover,
a:active,
a.router-link-active {
    border: 1px solid #4a7729;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
}
section {
  width: 50%;
}
li {
    padding: 0.5rem;
}
</style>