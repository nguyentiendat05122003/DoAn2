import toast from "./toast.js";
import Confirm from './confirm.js';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const LIST_ARTIST = JSON.parse(localStorage.getItem('listArtist')) || []
  const table = $("#table tbody");
  const btnAdd = $(".btn-add");
  const formAddArtist = $(".form-Artist");
  const btnCloseFom = $(".btn-close-formInfo");
  const btnSubmit = $(".btn-add-artist");
  const btnSave = $(".btn-save");
  const inputName = $("#name");
  const inputEmail = $("#email");
  const inputAddress = $("#address");
  const inputSearch = $("#search-artist")
  const listNavigator = $$(".item-navigator")
  const contentMain = $$(".main")
  let indexOfArtist;
  return {
    handleEvent() {
      btnAdd.onclick = () => {
        formAddArtist.classList.remove("hide");
        btnSubmit.classList.remove("hide");
        btnSave.classList.add("hide");
      };
      btnCloseFom.onclick = () => {
        formAddArtist.classList.add("hide");
      };
      inputSearch.oninput = (e) => {
        const value = e.target.value
        if (value.trim() !== '') {
          this.search(value.toLowerCase())
        }
        else {
          this.render()
        }
      }
      listNavigator.forEach((item, index) => {
        const content = contentMain[index]
        item.onclick = function () {
          $(".item-navigator.active").classList.remove('active')
          $(".main.active").classList.remove('active')
          item.classList.add("active");
          content.classList.add("active");
        }

      })

    },
    add(artist) {
      LIST_ARTIST.push(artist);
      this.save(LIST_ARTIST)
      toast({
        title: "Thành công!",
        message: "Bạn đã lưu thông tin thành công",
        type: "success",
        duration: 2000,
      });
    },
    delete(index) {
      LIST_ARTIST.splice(index, 1);
      this.save(LIST_ARTIST)
      toast({
        title: "Thành công!",
        message: "Bạn đã xóa thành công",
        type: "success",
        duration: 2000,
      });
    },
    edit(index, artist) {
      LIST_ARTIST[index] = { ...LIST_ARTIST[index], ...artist }
      this.save(LIST_ARTIST)
      toast({
        title: "Thành công!",
        message: "Bạn đã sửa thông tin thành công",
        type: "success",
        duration: 2000,
      });
    },
    ban(index) {
      if (LIST_ARTIST[index].isBan) {
        LIST_ARTIST[index] = { ...LIST_ARTIST[index], isBan: false };
      } else {
        LIST_ARTIST[index] = { ...LIST_ARTIST[index], isBan: true };
      }
      this.save(LIST_ARTIST)
    },
    search(value) {
      let listSearch = LIST_ARTIST.filter((artist) => artist.name.toLowerCase().includes(value))
      this.render(listSearch)
    },
    render(list = LIST_ARTIST) {
      const templateArtist = list.map((artist, index) => {
        return `<tr style="text-align: center">
                <td>${index + 1}</td>
                 <td>
                  <input
                    data-name=${artist.name}
                    data-index=${index}
                    class="input-table input-nameArtist input-${artist.id}"
                    type="text"
                    value=${artist.name}                  
                  />
                </td>
                <td>
                  <input
                    class="input-table input-email input-${artist.id}"
                    type="text"
                    data-email="${artist.email}"
                    value=${artist.email}
                  />
                </td>
                <td>
                  <input
                    class="input-table input-country input-${artist.id}"
                    type="text"
                    value="${artist.address}"
                    data-country="${artist.address}"
                  />
                </td>
                <td>${artist.isBan ? "Ban" : ""}</td>
                <td style="text-align: center">
                  <i data-index="${index}" class="fas fa-trash-alt btn-delete" title="Xóa"></i>
                  <i data-index="${index}"  class="fa-solid fa-ban btn-ban"></i>
                  <i data-index="${index}" class="fa-regular fa-pen-to-square btn-edit"></i>
                </td>
                </tr>`;
      });
      table.innerHTML = templateArtist.join("");
      $("#artist-quantity").innerText = list.length
    },
    handleAdd(e, type) {
      e.preventDefault();
      if (
        inputEmail.value.trim() !== "" &&
        inputName.value.trim() !== "" &&
        inputAddress.value.trim() !== ""
      ) {
        if (type === "edit") {
          const newArtist = {
            name: inputName.value,
            email: inputEmail.value,
            address: inputAddress.value,
          };
          this.edit(indexOfArtist, newArtist);
          formAddArtist.classList.add("hide");
          inputEmail.value = "";
          inputName.value = "";
          inputAddress.value = "";
          this.render();
        } else if (type === "add") {
          const newArtist = {
            name: inputName.value,
            email: inputEmail.value,
            address: inputAddress.value,
          };
          this.add(newArtist);
          formAddArtist.classList.add("hide");
          inputEmail.value = "";
          inputName.value = "";
          inputAddress.value = "";
          this.render();
        }
      } else {
        return;
      }
    },
    handleLogic(e) {
      const deleteBtn = e.target.closest(".btn-delete");
      const banBtn = e.target.closest(".btn-ban");
      const editBtn = e.target.closest(".btn-edit");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        Confirm.open({
          title: "Thông báo",
          message: "Bạn có muốn xóa nghệ sĩ này không ?",
          onok: () => {
            this.delete(index);
            this.render();
          },
        });
      }
      if (banBtn) {
        const index = banBtn.dataset.index;
        if (LIST_ARTIST[index].isBan) {
          Confirm.open({
            title: "Thông báo",
            message: "Bạn có muốn bỏ chặn nghệ sĩ này không ?",
            onok: () => {
              this.ban(index);
              this.render();
            },
          });
        }
        else {
          Confirm.open({
            title: "Thông báo",
            message: "Bạn có muốn chặn nghệ sĩ này không ?",
            onok: () => {
              this.ban(index);
              this.render();
            },
          });
        }
      }
      if (editBtn) {
        const index = editBtn.dataset.index;
        const itemEdit = LIST_ARTIST[index];
        indexOfArtist = index
        formAddArtist.classList.remove("hide");
        inputName.value = itemEdit.name;
        inputEmail.value = itemEdit.email;
        inputAddress.value = itemEdit.address;
        btnSubmit.classList.add("hide");
        btnSave.classList.remove("hide");
      } else {
        btnSubmit.classList.remove("hide");
        btnSave.classList.add("hide");
      }
    },
    init() {
      //add
      btnSubmit.onclick = (e) => {
        this.handleAdd.call(app, e, "add");
      };
      //delete,ban
      table.onclick = this.handleLogic.bind(app);
      //edit
      btnSave.onclick = (e) => {
        this.handleAdd.call(app, e, "edit");
      };
      this.render();
      this.handleEvent();
    },
    save(listArtist) {
      localStorage.setItem('listArtist', JSON.stringify(listArtist))
    }
  };
})();

app.init();
