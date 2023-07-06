<template>
   <v-form v-model="valid">
      <v-container>
         <v-row>
            <v-col cols="12">
               <h1>Nueva persona</h1>
            </v-col>
            
            <v-col cols="12" md="4">
               <v-select
                  :rules="reglasTipoDocumento"
                  label="Tipo de documento"
                  :items="tiposDocumento"
                  required
               ></v-select>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
                  v-model="numeroDocumento" 
                  :rules="reglasNumeroDocumento" 
                  :counter="11" 
                  label="Número de documento"
                  required>
               </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
                  v-model="primerNombre" 
                  :rules="reglasPrimerNombre" 
                  :counter="20" 
                  label="Primer nombre"
                  required>
               </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
                  v-model="segundoNombre" 
                  :rules="reglasSegundoNombre" 
                  :counter="20" 
                  label="Segundo nombre">
               </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
                  v-model="apellidos" 
                  :rules="reglasApellidos" 
                  :counter="40" 
                  label="Apellidos" 
                  required>
               </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
                  v-model="direccion" 
                  :rules="reglasDireccion" 
                  :counter="60" 
                  label="Dirección de residencía" 
                  required>
               </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-autocomplete
                  :rules="reglasDepartamento"
                  v-model="departamento"
                  label="Departamento"
                  :items="departamentos"
                  item-value="codigoDepartamento"
                  item-title="nombreDepartamento"
                  @update:model-value="leerMunicipios"
                  required
               ></v-autocomplete>
            </v-col>

            <v-col cols="12" md="4">
               <v-autocomplete
                  :rules="reglasMunicipio"
                  label="Municipio"
                  :items="municipios"
                  item-value="codigoMunicipio"
                  item-title="nombreMunicipio"
                  required
               ></v-autocomplete>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field v-model="email" label="E-mail"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
               <v-text-field 
               v-model="telefono" 
               :rules="reglasTelefono" 
                  :counter="20" 
                  label="Teléfono">
               </v-text-field>
            </v-col>
            
            <v-col cols="12">
               <v-btn type="submit" class="mt-2">Enviar</v-btn>
            </v-col>

         </v-row>
      </v-container>
   </v-form>
</template>

<script>
/*
numeroDocumento: "2111100006",
tipoDocumento: "Cedula de extranjería",
primerNombre: "Eduardo",
segundoNombre: "Antonio",
apellidos: "Silva Gutiérrez",
direccion: "Avenida 20 #30-10",
municipio: "Cartagena",
departamento: "Bolívar",
telefono: "3109876543"
email
*/
export default {
   mounted() {
      this.leerDepartamentos();
   },
   data: () => ({
      valid: false,
      numeroDocumento: '',
      tipoDocumento: '',
      primerNombre: '',
      segundoNombre: '',
      apellidos: '',
      direccion: '',
      municipio: null,
      departamento: null,
      telefono: '',
      email: '',
      departamentos: [],
      municipios: [],
      tiposDocumento: [
         'Cédula de ciudadanía',
         'Cédula de extranjería',
         'Pasaporte'
      ],
      reglasTipoDocumento: [
         value => {
            if (value) return true

            return 'El tipo de documento es obligatorio.'
         },
      ],
      reglasNumeroDocumento: [
         value => {
            if (value) return true

            return 'El número de documento es obligatorio.'
         },
         value => {
            if (value?.length <= 11) return true

            return 'El número de documento debe contener menos de 11 caracteres.'
         },
      ],
      reglasPrimerNombre: [
         value => {
            if (value) return true

            return 'El primer nombre es obligatorio.'
         },
         value => {
            if (value?.length <= 20) return true

            return 'El nombre debe tener menos de 20 caracteres.'
         },
         value => {
            if (/[^0-9]/.test(value)) return true

            return 'El nombre no puede contener números.'
         },
      ],
      reglasSegundoNombre: [
         value => {
            if (value?.length <= 20) return true

            return 'El nombre debe tener menos de 20 caracteres.'
         },
         value => {
            if (/[^0-9]/.test(value)) return true

            return 'El nombre no puede contener números.'
         },
      ],
      reglasApellidos: [
         value => {
            if (value) return true

            return 'El apellido es obligatorio.'
         },
         value => {
            if (value?.length <= 40) return true

            return 'El nombre debe tener menos de 40 caracteres.'
         },
         value => {
            if (/[^0-9]/.test(value)) return true

            return 'Los apellidos no pueden contener números.'
         },
      ],
      reglasDireccion: [
         value => {
            if (value) return true

            return 'La dirección es obligatoria.'
         },
         value => {
            if (value?.length <= 60) return true

            return 'La dirección debe contener menos de 60 caracteres.'
         },
      ],
      reglasDepartamento: [
         value => {
            if (value) return true

            return 'El departamento es obligatorio.'
         },
      ],
      reglasMunicipio: [
         value => {
            if (value) return true

            return 'El municipio es obligatorio.'
         },
      ],
      reglasTelefono: [
         value => {
            if (value) return true

            return 'El telefono es obligatorio.'
         },
         value => {
            if (value?.length <= 12) return true

            return 'El teléfono debe tener menos de 12 dígitos.'
         },
         value => {
            if (/^\d+$/.test(value)) return true;

            return 'El valor debe contener solo números.';
         },
      ],
      reglasEmail: [
         value => {
            if (/.+@.+\..+/.test(value)) return true

            return 'Debe ingresar una dirección de correo válida.'
         },
      ],
   }),
   methods: {
      leerDepartamentos() {
         fetch("../src/assets/departamentos.json") // Ruta relativa al archivo JSON
            .then(response => response.json())
            .then(data => {
               this.departamentos = data;
               // Hacer cualquier otra operación con los datos JSON aquí
            })
            .catch(error => {
               console.error("Error al leer el archivo JSON:", error);
            });
      },
      leerMunicipios(departamento) {
         fetch("../src/assets/municipios.json") // Ruta relativa al archivo JSON
            .then(response => response.json())
            .then(data => {
               var municipios = data;
               this.municipios = municipios.filter(
                  function(municipio){
                     return municipio.codigoDepartamento == departamento;
                  }
               )
               // Hacer cualquier otra operación con los datos JSON aquí
            })
            .catch(error => {
               console.error("Error al leer el archivo JSON:", error);
            });
      }
   }
}
</script>