let wrapper = document.getElementById("wrapper");
let arr = [];
let keyArr = [];

function createNew() {
  var newReq = prompt("Create a new To-Do item");
  newReq ? localStorage.setItem(newReq, newReq) : null;
  location.reload();
}

function deleteAll() {
  confirm("Are you sure want to delete all Items?")
    ? localStorage.clear()
    : null;
  location.reload();
}

if (localStorage.length <= 0) {
  wrapper.innerHTML = `<div class="mt-2 rounded-2 text-center text-black">List Empty</div>`;
} else {
  for (i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    keyArr.push(key);

    wrapper.innerHTML += `<div class=" form-box rounded-2 p-2 mb-2 flex-shrink-0"  id="${key}" >
                    <!-- Row start -->
                    <div class="row py-2 align-items-center ">
                      <div class="col-10 ">
                        <label
                          class="form-check-label ps-2"
                          for="name"
                          style="word-break: break-word"
                        >
                          ${localStorage.getItem(key)}
                        </label>
                      </div>
                      <div class="col-1 ">
                        <i class="fa-solid fa-trash m-1" onclick="deleteCustom('${key}')"></i>
                      </div>
                    </div>
                  </div>`;
  }
}

for (let i of keyArr) {
  document.getElementById(i).addEventListener("click", function () {
    toggle(i);
  });
}

function deleteCustom(n) {
  localStorage.removeItem(n);
  location.reload();
}

function toggle(key) {
  if (arr.includes(key)) {
    arr = arr.filter((item) => item !== key);
  } else {
    arr.push(key);
  }

  document.getElementById(key).classList.toggle("bg-primary");
}

function deleteSelected() {
  for (let n of arr) {
    localStorage.removeItem(n);
    location.reload();
  }
}
