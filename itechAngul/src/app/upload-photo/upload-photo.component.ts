import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FileUploader,
  FileUploaderOptions,
  ParsedResponseHeaders
} from "ng2-file-upload";
import { Cloudinary } from "@cloudinary/angular-5.x";
import { FormControl } from "@angular/forms";
import { httpUrls } from '../Constants/Urls';

@Component({
  selector: "app-upload-photo",
  templateUrl: "./upload-photo.component.html",
  styleUrls: ["./upload-photo.component.scss"]
})
export class UploadPhotoComponent implements OnInit {
  constructor(private cloudinary: Cloudinary) {}

  @Input() fileUrl: FormControl;
  @Input() readonly = false;
  @Output() urlChange: EventEmitter<string> = new EventEmitter<string>();

  hasBaseDropZoneOver = false;
  uploader: FileUploader;

  ngOnInit() {
    if (!this.fileUrl.value) {
      this.fileUrl.setValue(
        httpUrls.SART_PIC
      );
    }
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${
        this.cloudinary.config().cloud_name
      }/upload`,
      autoUpload: true,
      isHTML5: true,
      removeAfterUpload: true,
      headers: [
        {
          name: "X-Requested-With",
          value: "XMLHttpRequest"
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData) => {
      form.append("upload_preset", this.cloudinary.config().upload_preset);

      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    this.uploader.onCompleteItem = (
      item: any,
      response: string,
      status: number,
      headers: ParsedResponseHeaders
    ) => {
      this.fileUrl.setValue(JSON.parse(response).url);
      if (this.urlChange) {
        this.urlChange.emit(this.fileUrl.value);
      }
    };
  }
}
