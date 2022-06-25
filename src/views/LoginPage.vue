<template>
<section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10" >
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <img src="../assets/logo.png" alt="" srcset="">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">
                <img src="../assets/logo2.png"
                  style="width: 185px;" alt="logo">
                  <p>Solar Energy</p>

                <form>
                  <div style="width:100%;height:0;position:relative;">
                                      
                  <div class="form-outline mb-4">
                    <input type="email" 
                    id="form2Example11" 
                    class="form-control"
                    placeholder="E-mail" 
                    v-model="login.email" />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" 
                    id="form2Example22" 
                    class="form-control" 
                    placeholder="******"
                    v-model="login.password" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button 
                    class="btn btn-success btn-block fa-lg gradient-custom-2 mb-3"
                    @click="autenticar"
                    >Logar</button>

                    <p class="mb-0 me-2">Ainda não está cadastrado?</p>
                    <router-link to="/registrar">Criar conta</router-link>
                  </div>
                  </div>
                </form>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
          return {
              login:{
              email: '',
              password: ''
              }
          };
      },
  methods: {
    autenticar() {
        this.$store.commit('autenticacaoModule/autenticar', this.login);
        if (this.$store.state.autenticacaoModule.autenticado) {
          this.$router.push('/');
        }
    }
  }
}
</script>

<style scoped>
   section{
      margin-top: 0;
    }
    .col-lg-6{
      background-color: #fafafa;
      border-radius: 8px;
    }
    
    
</style>