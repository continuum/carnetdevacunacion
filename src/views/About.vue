<template>
  <div class="dashboard">
    <section class="hero container">
      <div class="hero-body">
        <div
          class="container is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        >
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="@/assets/perro-en-revision-veterinaria.jpg"
            />
          </figure>
          <p class="title has-text-centered has-text-link">
            ¡Bienvenido!<br />
            CARNET DE VACUNACIÓN DIGITAL
          </p>
          <p class="subtitle"></p>
        </div>
      </div>
    </section>

    <section class="columns owner is-centered columns-pet mb-3">
      <div class="column is-half is-7">
        <div class="card">
          <div class="card-content p-5">
            <p>
              <span class="title is-size-3">Vilma Cerón Moreno</span>
            </p>
            <p class="subtitle has-text-success-light has-text-weight-medium">
              Dueño de 1 mascota <span>/ Santiago de Chile</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="columns is-centered columns-pet mb-5">
      <div class="column is-half is-7">
        <div class="notification is-info is-light mb-4">
          <strong>¡IMPORTANTE!</strong><br />
          La mascota no ha sido inmunizada hace más de un año. <br />
          Recuerda ir a la clínica veterinaria más cercana por la salud de tu
          mascota.
        </div>

        <div class="card">
          <div class="card-content">
            <div class="content mb-6">
              <p class="title is-size-3 mb-0">Catón</p>
              <p class="mb-3">
                Nº de Chip
                <a
                  class="has-text-link has-text-weight-medium"
                  href="https://registratumascota.cl/consultas.xhtml"
                  >900115000803757</a
                >
              </p>
              <p class="mb-0">
                Especie <span class="has-text-weight-semibold">Perro</span> /
                Género <span class="has-text-weight-semibold">Hembra</span> /
                Edad <span class="has-text-weight-semibold">11 años</span>
              </p>
              <p>
                Estado
                <span class="has-text-weight-semibold">En domicilio</span> /
                Raza <span class="has-text-weight-semibold">Mestizo</span> /
                Color <span class="has-text-weight-semibold">Blanco</span>
              </p>
              <hr class="my-2" />
              <p class="mb-0">
                Clínica Veterinaria
                <a
                  class="has-text-link has-text-weight-medium"
                  href="https://goo.gl/maps/JU1SL23ccwoyGoP98"
                  >Veterinaria Barbie</a
                >
              </p>
              <p>
                <span class="is-size-6 has-text-weight-normal"
                  >Médico Veterinario:
                </span>
                <strong>María José Obregon H.</strong> /
                <strong>Valeria Alarcón H.</strong>
              </p>
            </div>

            <div class="tabs is-boxed">
              <ul>
                <li class="is-active">
                  <a>
                    <span class="icon is-small"
                      ><span class="material-icons">
                        medical_services
                      </span></span
                    >

                    <span class="has-text-weight-semibold"
                      >Información de Vacunas</span
                    >
                  </a>
                </li>
              </ul>
            </div>

            <div class="content table__wrapper mt-6 mb-3">
              <table class="table">
                <thead>
                  <tr>
                    <th class="has-text-success-dark has-text-centered">
                      Vacuna
                    </th>
                    <th class="has-text-success-dark has-text-centered">
                      Aplicación
                    </th>
                    <th class="has-text-success-dark has-text-centered">
                      Próxima
                    </th>
                    <th class="has-text-success-dark has-text-centered">
                      Verificación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <span>1ra Séxtuple</span> <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Fort dodge 350257A / 116969A
                      </span>
                    </th>
                    <td class="has-text-centered">01/11/2009</td>
                    <td class="has-text-centered">22/11/2021</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>2da Séxtuple</span> <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Fort dodge 350257A / 116969A
                      </span>
                    </th>
                    <td class="has-text-centered">22/03/2009</td>
                    <td class="has-text-centered">13/12/2009</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>3ra Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Fort dodge 916487A / 350262A
                      </span>
                    </th>
                    <td class="has-text-centered">14/12/2009</td>
                    <td class="has-text-centered">14/01/2010</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Virbac Canigen MHA2PPI 2WZ6 / CANIGEN L 2WZ6
                      </span>
                    </th>
                    <td class="has-text-centered">12/12/2010</td>
                    <td class="has-text-centered">12/12/2011</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2010</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2011</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2011</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span>Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >virbac Canigen MHA2PPI 3JWK / CANIGEN L 3JWK
                      </span>
                    </th>
                    <td class="has-text-centered">17/12/2012</td>
                    <td class="has-text-centered">17/12/2013</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2012</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2013</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Pfizer Rabguard 5174159
                      </span>
                    </th>
                    <td class="has-text-centered">12/01/2013</td>
                    <td class="has-text-centered">12/01/2014</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2014</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2014</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >VANGUARD PLUS A405292A / A403777B
                      </span>
                    </th>
                    <td class="has-text-centered">29/08/2015</td>
                    <td class="has-text-centered">29/08/2016</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2015</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Óctuple Anual</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Nobivac CV 02051365 / DaPPvL2 02131634C
                      </span>
                    </th>
                    <td class="has-text-centered">27/09/2016</td>
                    <td class="has-text-centered">27/09/2017</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2016</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2017</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2017</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2018</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2018</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Séxtuple Anual</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >VANGUARD PLUS 256020 / 256543A
                      </span>
                    </th>
                    <td class="has-text-centered">28/01/2019</td>
                    <td class="has-text-centered">28/01/2020</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal"
                        >Zoetis Rabguard 288170
                      </span>
                    </th>
                    <td class="has-text-centered">28/01/2019</td>
                    <td class="has-text-centered">28/01/2020</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-success-light">
                        verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2020</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span class="has-text-grey-lighter">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">- /2020</td>
                    <td class="has-text-centered">-</td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light">
                        disabled_by_default
                      </span>
                    </td>
                  </tr>
                  <tr class="has-background-primary-light">
                    <th>
                      <span class="">Séxtuple</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">
                      <span class="tag is-link has-text-weight-medium"
                        >Vigente</span
                      >
                    </td>
                    <td class="has-text-centered"></td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light"> </span>
                    </td>
                  </tr>
                  <tr class="has-background-primary-light">
                    <th>
                      <span class="">Antirrábica</span>
                      <br />
                      <span class="is-size-7 has-text-weight-normal">- </span>
                    </th>
                    <td class="has-text-centered">
                      <span class="tag is-link has-text-weight-medium"
                        >Vigente</span
                      >
                    </td>
                    <td class="has-text-centered"></td>
                    <td class="has-text-centered">
                      <span class="material-icons has-text-link-light"> </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item has-text-weight-medium"
              >Editar</a
            >
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

