<template>
  <section class="doc-section container">
    <h2 class="h1 mb-4">{{ title }}</h2>
    <div class="row pt-4 pb-5 pr-md-5">
      <div class="col-md-5 landing-img">
        <img src="../assets/docs/landing-B.svg" alt="The MCC toolkit" />
      </div>
      <div class="col-12 col-md-7">
        <h4 class="h5 text-uppercase font-weight-bold mt-4">
          Bootstrap 5 - Based
        </h4>
        <h3 class="mt-3">EP Mobile UI/UX Mobile MCC Toolkit</h3>
        <p>
          This Library will help you building your EP Mobile application while
          focusing on content. It provides navigation, layouts,
          <nuxt-link
            to="/docs/components/components-list"
            title="View all templates"
            >a set of components</nuxt-link
          >based on the Bootstrap framework and some additional ones, as EU
          flags. Our
          <nuxt-link to="/templates/all-templates" title="View all templates"
            >templates</nuxt-link
          >are also a good basis to start on.
        </p>
        <nuxt-link to="/docs/whatsnew">
          <button class="btn btn-info btn-lg mt-2">What's new?</button>
        </nuxt-link>
      </div>
    </div>
    <div class="row step-by-step py-5 px-3 bg-graylight">
      <div class="col-12 d-flex flex-column flex-sm-row">
        <h3 class="d-flex flex-shrink-0 me-5">Step-by-Step</h3>
        <p>
          While you surely have your own way of building applications, you may
          also want to follow these simple steps to start your project. Please
          check our
          <nuxt-link to="/docs/how-it-works" title="How it works">
            <em>How it works</em> </nuxt-link
          >and
          <nuxt-link to="/docs/getting-started" title="Getting started">
            <em>Getting started</em> </nuxt-link
          >pages where you will find some documentation about how this library
          was conceived.
        </p>
      </div>
      <div class="col d-flex justify-content-center landing-steps">
        <div class="landing-steps-item">
          <img src="../assets/docs/landing-B2-step-1.svg" alt />
          <p class="lead">
            <strong>Learn</strong> about our navigation, layouts and components.
          </p>
        </div>
        <div class="landing-steps-item">
          <img src="../assets/docs/landing-B2-step-2.svg" alt />
          <p>
            <strong>Download</strong> our templates and start build your own
          </p>
        </div>
        <div class="landing-steps-item">
          <img src="../assets/docs/landing-B2-step-3.svg" alt />
          <p>
            <strong>Organize</strong> your project and remove templates and
            scripts you don't need
          </p>
        </div>

        <div class="landing-steps-item">
          <img src="../assets/docs/landing-B2-step-4.svg" alt />
          <p><strong>Build</strong> your application and add some components</p>
        </div>
        <div class="landing-steps-item">
          <img src="../assets/docs/landing-B2-step-5.svg" alt />
          <p>
            <strong>Customize</strong> by adding your own styles in
            <code>my-custom.css</code> stylesheet
          </p>
        </div>
      </div>
      <div class="col-12 text-center">
        <nuxt-link :to="'/docs/getting-started'">
          <button class="btn btn-info btn-xl mt-3">Getting started</button>
        </nuxt-link>
      </div>
    </div>
    <!-- <div class="row mt-5 pb-5 pr-md-5">
      <div class="col-md-8">
        <h3 class="mt-4">Who can benefit from this library?</h3>
        <div class="accordion tk-accordion" id="accordionExample">
          <div>
            <h5
              id="headingOne"
              class="mb-0 d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Developers
              <i class="material-icons md-18">add</i>
            </h5>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <p>
                No need to reinvent the wheel. Less maintenance time, less
                download time, and less coding time, plenty of useful third
                party components which enable developers to set up an
                application in no time. With simple commands, you can start a
                project, generate components, libraries and services, add
                features, test, and update your current project.
              </p>
            </div>
          </div>
          <div>
            <h5
              id="headingTwo"
              class="mb-0 d-flex justify-content-between align-items-center collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Project Managers
              <i class="material-icons md-18">add</i>
            </h5>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <p>
                Let us do the tough part, we put a lot of effort into making
                sure that the EP Mobile toolkit is tailored for EP Application
                development. So your team can concentrate on high-level tasks
                rather than on routine coding and you only need to focus on the
                productivity and business requirements.
              </p>
            </div>
          </div>
          <div>
            <h5
              id="headingThree"
              class="mb-0 d-flex justify-content-between align-items-center collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Designers
              <i class="material-icons md-18">add</i>
            </h5>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <p>
                The UI Components library is customized for EP applications. We
                provide you UX recommendation, consistent UI kit and grid
                system. You can start your application design with these
                building blocks we provide which can be shared, developed and
                synced from any of your projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md landing-img d-flex align-items-center">
        <img class src="img/docs/landing-B-man.svg" alt="The MCC toolkit" />
      </div>
    </div> -->
  </section>
</template>
<script>


export default {
  layout: "docs",
  components: {
    
  },
  data() {
    return {
      title: `Introduction`,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "MCC Toolkit " + this.title,
        },
      ],
    };
  },
};
</script>
