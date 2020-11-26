<template>
  <footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
    <div class="text-left">
      <div>
        <div md="6">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content</p>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!">Link1</a></li>
            <li><a href="#!">Link2</a></li>
            <li><a href="#!">Link3</a></li>
            <li><a href="#!">Link4</a></li>
          </ul>
          <hr class="clearfix w-100 d-md-none" />
        </div>
        <div md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!">Link1</a></li>
            <li><a href="#!">Link2</a></li>
            <li><a href="#!">Link3</a></li>
            <li><a href="#!">Link4</a></li>
          </ul>
          <hr class="clearfix w-100 d-md-none" />
        </div>
      </div>
    </div>
    <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item"><a href="#"
            class="btn btn-danger btn-rounded">Sign up!</a></li>
      </ul>
    </div>
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a href="#" class="btn-floating btn-sm btn-fb mx-1">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn-floating btn-sm btn-tw mx-1">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn-floating btn-sm btn-li mx-1">
            <i class="fab fa-linked-in"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <div fluid>
        &copy; 2020 Copyright: <a href="#">Walid</a>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
};
</script>

<style scoped>
  .footer {
    background-color: gray;
    position: relative;
  }
</style>
