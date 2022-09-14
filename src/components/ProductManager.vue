
    <template>
  <v-container class="">
    <span
      class="text-h5 text-md transition-swing font-weight-thin ms-5"
    >
    <Span
    class="text-h5 text-md transition-swing font-weight-light"
    >Quản Lý</Span> Sản Phẩm
    </span>
    <v-card 
    class="ms-5 mt-5 ps-4"
    
    >
      <v-system-bar
        @dblclick="showTable = !showTable"
        color="white"
      >
        <v-spacer></v-spacer>
        <v-icon @click="showTable = !showTable" class="btn-icon">mdi-menu-down</v-icon>
        <!-- <v-icon class="btn-icon">mdi-close</v-icon> -->
      </v-system-bar>
      <v-responsive v-show="showTable" :aspect-ratio="16/6">
        
        <v-row justify="space-between">
          <v-col cols="9">
            <p class=" text--secondary"
            style="font-size: 15px;"
            >
              Danh Sách Sản Phẩm
            </p>
          </v-col>
          <v-col  class=" text--secondary">
            <v-menu offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn-table-setting float-end me-5" v-bind="attrs"
                v-on="on" x-small dense elevation="0">
                cài đặt 
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in table_cols"
                :key="index"
              >
                <v-checkbox
                  dense
                  :label="`Checkbox 1: ${item.name}`"
                ></v-checkbox>
                
              </v-list-item>
            </v-list>
          </v-menu>
          </v-col>
        </v-row>
        <v-btn 
        small 
        dense
        elevation="0"
        class=""
        color="red lighten-4"
        @click="onCreate()"
        
        >Tạo mới</v-btn>
          <v-data-table
            @dblclick:row="rowDoubleClick"
            :headers="headers"
            :items="desserts"
            :options.sync="options"
            :server-items-length="table_limit"
            :loading="loading"
            class="elevation-1 mt-3"
          ></v-data-table>
      </v-responsive>
    </v-card>

      <!-- start create form -->


    <div v-for="(value, index ) in createData" :key="index">
    <v-card 
    class="ms-5 mt-5 ps-4">
      <v-system-bar
        color="white"
        @dblclick="createData[index].isShow = !createData[index].isShow"
      >
        <v-spacer></v-spacer>
        <v-icon @click="createData[index].isShow = !createData[index].isShow" class="btn-icon">mdi-menu-down</v-icon>
        <!-- <v-icon class="btn-icon">mdi-close</v-icon> -->
      </v-system-bar>
      
      
      <v-responsive class="pb-5" v-show="createData[index].isShow" :aspect-ratio="16/6">
        <p class="text-h5 text-md transition-swing font-weight-thin ms-2" >Tạo mới</p>
        <div class="ms-2" v-for="(colIT, index) in createData[index].cols" :key="index">
            <v-row style="height: 50px;" class="align-center" dense >
              <v-col cols="2">
                <span >{{colIT.name}} :</span>
              </v-col>
              
              <v-col cols="3" >
                <div v-switch="colIT.type">
                <v-text-field v-case="'string'" 
                  :label="colIT.name"
                  
                ></v-text-field>
                <!-- type number -->
                <v-text-field v-case="'number'" type="number"
                  :label="colIT.name"
                ></v-text-field>
                <!-- type text -->
                <v-textarea 
                  v-case="'textarea'"
                  :label="colIT.name"
                  no-resize
                  auto-grow
                  dense
                  rows="1"
                  row-height="15"
                  class="mt-5"
                ></v-textarea>
                <!-- select -->
                <v-select v-case="'select'"
                  :loading="is_load"
                  :label="colIT.name"
                  :items="colIT.values"
                  :item-text="colIT.is_item_text ? colIT.item_text : []"
                ></v-select>

                <!-- select -->
                <v-select v-case="'multipleSelect'"
                  :loading="is_load"
                  :label="colIT.name"
                  :items="colIT.values"
                  :item-text="colIT.is_item_text ? colIT.item_text : []"
                  multiple
                  attach
                  chips
                ></v-select>
                <!-- file -->
                <v-file-input
                  class="mt-4"
                  v-case="'file'"
                  dense
                ></v-file-input>
                </div>

              </v-col>
            </v-row>
          </div>
      </v-responsive>
      </v-card>
    </div>
      <!-- end create form -->

      <!-- start edit form -->
  <div v-for="(value, index ) in editData" :key="index">
    <v-card 
    class="ms-5 mt-5 ps-4">
      <v-system-bar
        color="white"
        @dblclick="editData[index].isShow = !editData[index].isShow"
      >
        <v-spacer></v-spacer>
        <v-icon @click="editData[index].isShow = !editData[index].isShow" class="btn-icon">mdi-menu-down</v-icon>
        <!-- <v-icon class="btn-icon">mdi-close</v-icon> -->
      </v-system-bar>
      <v-responsive class="pb-5" v-show="editData[index].isShow" :aspect-ratio="16/6">
        <p class="text-h5 text-md transition-swing font-weight-thin ms-2" >Sửa - ID : {{editData[index].id}}</p>
        <div class="ms-2" v-for="(colIT, colsIndex) in editData[index].cols" :key="colsIndex">
            <v-row style="height: 50px;" class="align-center mb-4" dense >
              <v-col cols="2">
                <span >{{colIT.name}} :</span>
              </v-col>
              
              <v-col cols="3" >
                <div v-switch="colIT.type">
                <v-text-field v-case="'string'" 
                  :label="colIT.name"
                  :value="editData[index].cols[colsIndex].value"
                  @change="v => editData[index].cols[colsIndex].value = v"
                ></v-text-field>
                <!-- type number -->
                <v-text-field v-case="'number'" type="number"
                  :label="colIT.name"
                  :value="editData[index].cols[colsIndex].value"
                  @change="v => editData[index].cols[colsIndex].value = v"
                ></v-text-field>
                <!-- type text -->
                <v-textarea 
                  v-case="'textarea'"
                  :label="colIT.name"
                  no-resize
                  auto-grow
                  dense
                  rows="1"
                  row-height="15"
                  class="mt-5"
                  :value="editData[index].cols[colsIndex].value"
                  @change="v => editData[index].cols[colsIndex].value = v"
                ></v-textarea>
                <!-- select -->
                <v-select v-case="'select'"
                  :loading="is_load"
                  :label="colIT.name"
                  :items="colIT.values"
                  :item-text="colIT.is_item_text ? colIT.item_text : []"
                  :value="editData[index].cols[colsIndex].value"
                  @change="v => editData[index].cols[colsIndex].value = v"
                ></v-select>

                <!-- select -->
                <v-select v-case="'multipleSelect'"
                  :loading="is_load"
                  :label="colIT.name"
                  :items="colIT.values"
                  :item-text="colIT.is_item_text ? colIT.item_text : []"
                  :value="editData[index].cols[colsIndex].value"
                  @change="v => editData[index].cols[colsIndex].value = v"
                  multiple
                  attach
                  chips
                ></v-select>
                <!-- file -->
                <div class="div" 
                  v-case="'file'"
                  >
                <v-file-input
                  dense
                  class="mt-5"
                  @change="v => editData[index].cols[colsIndex].value = v"
                >
                </v-file-input>
                </div>
                
                </div>
              </v-col>
            </v-row>
          </div>
            <v-btn
            small 
            dense
            elevation="0"
            class=""
            color="red lighten-4"
            @click="editSave(editData[index].id, index)">LƯU</v-btn>
      </v-responsive>
    </v-card>
   </div>
      <!-- end edit form -->

    <!-- / dialog -------------------------------------------------------------------------------------->
    <v-dialog
      v-model="dialogShowAction"
      width="500"
    >
      <v-card>
        <v-card-title>
          <p class="text-h6 font-weight-regular">ID : {{tableSelect.item.id}}</p>
        </v-card-title>
        <v-card-text>
          <div>
            <v-row>
              <v-col cols="7">
                 <div class="ms-2" v-for="(colIT, index) in Object.keys(tableSelect.item)" :key="index">
                  <p class="text-subtitle-1">{{translate[colIT]}} : {{tableSelect.item[colIT]}}</p>
                </div>
              </v-col>
              <v-col cols="5">
                <img 
                  v-if="tableSelect.item.image"
                  :src="tableSelect.item.image"
                  width="190"
                  height="190"
                alt="">
              </v-col>
            </v-row>
          </div>
          <div>
          <v-btn 
            small 
            dense
            elevation="0"
            class="mr-2 mt-2"
            color="red lighten-4"
            @click="editItem(tableSelect.item)"
            
          >Sửa</v-btn>
          <v-btn 
            small 
            dense
            elevation="0"
            class="mr-2 mt-2"
            color="red lighten-4"
            @click="deleteitem(tableSelect.item.id)"
          >Xóa</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- / end dialog ------------------------------------------------------------------------------------- -->

    <v-snackbar
      v-model="snackbar"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Đóng
        </v-btn>
      </template>
    </v-snackbar>

    <!-- // loading ...... -->

     <v-overlay :value="loadingOverlay">
      <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="loadingValue"
      color="primary"
      >
      {{ loadingValue }}
    </v-progress-circular>
    </v-overlay>
    <v-btn>
      click kkkkkkkkkkkk
    </v-btn>
  </v-container>
</template>


<script>
  var PAGE_API = 'product';
  import { vSwitch, vCase } from 'v-switch-case'
  const uttranslate = require('../unitys/translate');
  const utmap = require('../unitys/mapType');
  
  import axios from 'axios';
  export default {
    name: 'ProductManager',
    directives: { 
      'switch': vSwitch,
      'case': vCase,
    },

    components: {
    
    },
    beforeMount(){
      this.translate = uttranslate;
      this.translateMap = utmap;
    },
    data: () => ({
      loadingOverlay: false,
      loadingValue: 0,
      snackbarText: '',
      translate: {},
      translateMap: {},
      snackbar: false,
      tableSelect: {
        item: []
      },
      dialogShowAction: false,
      query: '',
      // CREATE DATA
      createData: [],
      // CREATE DATA
      editData: [],

      showCreate: false,
       table_cols: [
        { name: 'Tên sản phẩm', type: 'string', isSelect: true },
        
      ],
      showTable: true,
        desserts: [],
        loading: true,
        options: {},
        headers: [
          {
            text: 'Tên',
            align: 'start',
            value: 'name',
          },
          { text: 'Giá', value: 'price' },
          { text: 'Trạng thái', value: 'active' },
        ],
        is_load: false,
        table_page: 0,
        table_limit: 10,
    }),
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    
    methods: {
      editSave(id, index){
        console.log(id);
        console.log(index);
        console.log(this.editData[index]);
      },
      async editItem(item){
        delete item.createdAt;          
        delete item.updatedAt;          
        this.dialogShowAction = false;
        const check = this.editData.filter(val => {
          return val.id == item;
        })
        if( check.length) {
          console.log('is');
        } else {
          let obj = {
            id: item.id,
            isShow: true,
            cols: []
          }
          for (const key in item) {
            obj.cols.push({
              name: this.translate[key],
              type: this.translateMap[key],
              value: item[key],
            })
          }
          this.editData.push(obj);
        }
        
        this.showTable = false;
        await this.onloadit();
      },
      deleteitem(id){
        axios.delete(`${this.$store.state.api}${PAGE_API}/${id}`).then(res => {
          console.log(res);
          if(res.data && res.data.status && res.data.status == 200)
          {
            this.dialogShowAction = false;
            this.snackbarText ='Xóa thành công !';
            this.snackbar = true;
          } else {
            this.snackbarText ='Xóa thất bại !';
            this.snackbar = true;
          }
       
        });
      },
      rowDoubleClick(event, item){
        console.log(event);
        console.log(item);
        this.tableSelect = item;
        this.dialogShowAction = true;
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      async onloadit(){
        console.log('object');
        this.is_load = true;
        this.loadingOverlay = true;
        this.loadingValue = 0;
        for (let index = 0; index < 4; index++) {
          this.loadingValue += 25;
          await this.sleep(700);
        }
        this.loadingOverlay = false;
        this.is_load = false;

      },
      async onCreate(){
        this.createData.push({
          isShow: true,
          cols: [
            {
              name: 'Tên sản Phẩm',
              type: 'string'
            },
            {
              name: 'Số lượng',
              type: 'number'
            },
            {
              name: 'textarea',
              type: 'textarea'
            },
            {
              name: 'select',
              type: 'select',
              is_item_text: true,
              item_text: 'value',
              values: [
                {
                  value: 'item1',
                  type: 0,
                },
                {
                  value: 'item2',
                  type: 0,
                }

              ]
            },
            {
              name: 'multipleSelect',
              type: 'multipleSelect',
              is_item_text: true,
              item_text: 'value',
              values: [
                {
                  value: 'item1',
                  type: 0,
                },
                {
                  value: 'item2',
                  type: 0,
                }
              ]
              
            },
            {
              name: 'file',
              type: 'file'
            },

          ]
        });
        this.showTable = false;
        await this.onloadit();
      },
      getDataFromApi () {
        console.log(this.options);
        this.loading = true;
        this.query = `page=0&limit=10`;
        axios.get(`${this.$store.state.api}${PAGE_API}?${this.query}`).then(res => {
          this.desserts = res.data.data;
          this.table_limit = this.desserts.length;
          this.loading = false
          const { sortBy, sortDesc } = this.options
          if (sortBy.length === 1 && sortDesc.length === 1) {
            this.desserts = this.desserts.sort((a, b) => {
              const sortA = a[sortBy[0]]
              const sortB = b[sortBy[0]]

              if (sortDesc[0]) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }
        }
        )
      },
    },
  }
</script>
