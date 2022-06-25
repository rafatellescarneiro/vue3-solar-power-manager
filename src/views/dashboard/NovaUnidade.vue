<template>
    <vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }">
      <div class="row g-2">
        <div class="col-md-4">
          <label for="nome">Nome</label>
          <vee-field name="nome" class="form-control" v-model="reserva.nome" />
          <span class="text-danger" v-text="errors.nome" v-show="errors.nome"></span>
        </div>
        <div class="col-4">
          <label for="">Ano</label>
          <vee-field type="number" name="ano" class="form-control" v-model="reserva.ano" />
          <span class="text-danger" v-text="errors.ano" v-show="errors.ano"></span>
        </div>
  
        <div class="col-12">
          <button type="submit" class="btn btn-primary" style="margin-right: 5px">Save</button>
          <button type="button" class="btn btn-danger" @click="clear">Limpar</button>
        </div>
      </div>
    </vee-form>
</template>

<script>
import { Form, Field, defineRule } from 'vee-validate';

export default {
    components: {
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
            nome: "required"
        }

        return{
            schema,
            novaUni
        }
    },
    methods: {
        save(){
            this.novaUni = {}
        },
        clear(){
            this.novaUni = {}
        }
    }
}
</script>

<style>

</style>