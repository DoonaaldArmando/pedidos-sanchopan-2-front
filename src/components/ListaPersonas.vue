<template>
   <div>
      <v-table>
         <thead>
            <tr>
               <th class="text-left">
               Documento
               </th>
               <th class="text-left">
               Nombres
               </th>
               <th class="text-left">
               Apellidos
               </th>
               <th class="text-left">
               Teléfono
               </th>
            </tr>
         </thead>
         <tbody>
            <tr
               v-for="item in personas"
               :key="item.numeroDocumento"
            >
               <td>{{ item.numeroDocumento }}</td>
               <td>{{ item.primerNombre +" "+ item.segundoNombre }}</td>
               <td>{{ item.apellidos }}</td>
               <td>{{ item.telefono }}</td>
            </tr>
         </tbody>
      </v-table>
   </div>
</template>

<script>
export default {
   data() {
      return {
         itemsPorPagina: 7,
         personas: [
            {
               numeroDocumento: "2111100000",
               tipoDocumento: "Cedula de ciudadanía",
               primerNombre: "Andrés",
               segundoNombre: "Felipe",
               apellidos: "Herrera Gómez",
               direccion: "Carrera 7 #15-30",
               municipio: "Monteria",
               departamento: "Cordoba",
               telefono: "3151234567",
               email: "andres.herrera@gmail.com"
            },
            {
               numeroDocumento: "2111100001",
               tipoDocumento: "Cedula de ciudadanía",
               primerNombre: "María",
               segundoNombre: "Alejandra",
               apellidos: "López Pérez",
               direccion: "Avenida 10 #25-15",
               municipio: "Bogotá",
               departamento: "Cundinamarca",
               telefono: "3209876543",
               email: "maria.lopez@gmail.com"
            },
            {
               numeroDocumento: "2111100002",
               tipoDocumento: "Cedula de extranjería",
               primerNombre: "Juan",
               segundoNombre: "Carlos",
               apellidos: "Ramírez Sánchez",
               direccion: "Calle 50 #8-45",
               municipio: "Medellín",
               departamento: "Antioquia",
               telefono: "3105432167",
               email: "juan.ramirez@gmail.com"
            },
            {
               numeroDocumento: "2111100003",
               tipoDocumento: "Pasaporte",
               primerNombre: "Laura",
               segundoNombre: "Fernanda",
               apellidos: "García Mendoza",
               direccion: "Carrera 15 #40-12",
               municipio: "Cali",
               departamento: "Valle del Cauca",
               telefono: "3177896543",
               email: "laura.fernanda@gmail.com"
            },
            {
               numeroDocumento: "2111100004",
               tipoDocumento: "Tarjeta de identidad",
               primerNombre: "Pedro",
               segundoNombre: "Andrés",
               apellidos: "Londoño Vargas",
               direccion: "Avenida 5 #12-30",
               municipio: "Pereira",
               departamento: "Risaralda",
               telefono: "3006549871",
               email: "pedro.londono@example.com"
            },
            {
               numeroDocumento: "2111100005",
               tipoDocumento: "Cedula de ciudadanía",
               primerNombre: "Ana",
               segundoNombre: "María",
               apellidos: "González López",
               direccion: "Calle 12 #18-22",
               municipio: "Barranquilla",
               departamento: "Atlántico",
               telefono: "3012345678",
               email: "ana.gonzalez@example.com"
            },
            {
               numeroDocumento: "2111100006",
               tipoDocumento: "Cedula de extranjería",
               primerNombre: "Eduardo",
               segundoNombre: "Antonio",
               apellidos: "Silva Gutiérrez",
               direccion: "Avenida 20 #30-10",
               municipio: "Cartagena",
               departamento: "Bolívar",
               telefono: "3109876543",
               email: "eduardo.silva@example.com"
            },
            {
               numeroDocumento: "2111100007",
               tipoDocumento: "Pasaporte",
               primerNombre: "Carolina",
               segundoNombre: "Isabel",
               apellidos: "Castro Morales",
               direccion: "Carrera 25 #15-50",
               municipio: "Bucaramanga",
               departamento: "Santander",
               telefono: "3178765432",
               email: "carolina.castro@example.com"
            },
            {
               numeroDocumento: "2111100008",
               tipoDocumento: "Tarjeta de identidad",
               primerNombre: "Gabriel",
               segundoNombre: "Andrés",
               apellidos: "López Torres",
               direccion: "Calle 5 #10-35",
               municipio: "Ibagué",
               departamento: "Tolima",
               telefono: "3223456789",
               email: "gabriel.lopez@example.com"
            },
            {
               numeroDocumento: "2111100009",
               tipoDocumento: "Cedula de ciudadanía",
               primerNombre: "Valentina",
               segundoNombre: "Fernández",
               apellidos: "Hernández Gómez",
               direccion: "Carrera 18 #22-15",
               municipio: "Santa Marta",
               departamento: "Magdalena",
               telefono: "3156789012",
               email: "valentina.fernandez@example.com"
            }
         ]
      }
   }
}
</script>