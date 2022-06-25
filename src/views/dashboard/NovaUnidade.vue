<template>
    <div class="novaUnidade">
        <Sidebar/>
        <div :style="{ 'margin-left': sidebarWidth }">
            <router-view/>
        </div>
        <h2 class="navbar navbar-expand-md fixed-top">Nova Unidade</h2>
        <div role="main" class="container">
                <vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }">
                    <div class="form-group row">
                        <div class="form-group">
                            <label for="nickname" class="col form-check-inline"><strong>Apelido</strong></label>
                            <div class="col-sm-6">
                                <vee-field name="nickname" class="form-control" v-model="novaUni.nickname" />
                                <span class="text-danger form-check-inline" v-text="errors.nickname" v-show="errors.nickname"></span>
                           </div>
                            

                        </div>
                        <div class="form-group">
                            <label for="" class="col form-check-inline"><p><strong>Local</strong></p></label>
                            <div class="col-sm-6">
                                <vee-field name="local" class="form-control" v-model="novaUni.local" />
                                <span class="text-danger form-check-inline" v-text="errors.local" v-show="errors.local"></span>
                            </div>
                                
                        </div>
                        <div class="form-group">
                            <label for="marca" class="col form-check-inline"><p><strong>Marca</strong></p></label>
                            <div class="col-sm-6">                       
                                <vee-field name="marca" class="form-control" v-model="novaUni.marca" />                        
                                <span class="text-danger form-check-inline" v-text="errors.marca" v-show="errors.marca"></span>
                            </div> 
                                
                 
                        </div>
                        <div class="form-group">
                            <label for="model" class="col form-check-inline"><p><strong>Modelo</strong></p></label>
                            <div class="col-sm-6">
                                <vee-field name="model" class="form-control" v-model="novaUni.model" />                 
                                <span class="text-danger form-check-inline" v-text="errors.model" v-show="errors.model"></span>
                            </div>
                               
                                              
                        </div>
                        <div class="form-group">
                            <label for="active" class="col form-check-inline"><p><strong>Ativo</strong></p></label>
                            <input type="checkbox" name="active" > 
                        </div>
                                
                        <div class="btn">
                        <button type="submit" class="btn btn-success" style="margin-right: 5px">Save</button>
                        <button type="button" class="btn btn-warning" @click="voltar">Voltar</button>
                        </div>
                    </div>
                </vee-form>
        </div>
    </div>
    
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate';
import Sidebar from '../../components/Sidebar'
import { sidebarWidth } from '../../router/index' 

export default {
    components: {
        Sidebar,
        'vee-form': Form,
        'vee-field': Field
    },
    data(){
        defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });

        const schema = {
            nickname: "required",
            local: "required",
            marca: "required",
            model: "required"
        }

        return{
            schema,
            novaUni: {
                nickname:'',
                marca:'',
                model:'',
                active: false
            },
            
        }
    },
    methods: {
        save(){
            this.novaUni = {}
        },
        voltar(){
            this.$router.push('/unidade')
        }
    }
}
</script>


<style scoped>
    .novaUnidade{
        background-color: var(--bs-gray-200);
    }

    .form-group{
        padding: 8px 40px 0;
        text-align: left;
        background-color: #fafafa;
    }
    .form-group.row{
        width: 850px;
        border-radius: 8px;
        padding-bottom: 20px;
        margin-left: 80px;
    }
    h2{ 
        margin: 0 113px;
        padding: 0 150px;
    }
    .card-body{
        margin-left: 145px;
    }
    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .btn{
        border-radius: 8px;
    }    
    
</style>