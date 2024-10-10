---
order: 50
expanded: true
---


# DICOM Import

How to import DICOM files
I-one Raphaview can open DICOM files from various ways and sources: drag and drop, local device, DICOM ZIP, DICOM CD/DVD, DICOM Query/Retrieve, and from commands locally or remotely.

 Note
An popup error message is displayed when DICOM files cannot be read (from v4.3.0) or when a network error occurs. In the latter case a message asking to download again the missing files.

From the system file explorer

Drag and drop
Files or folders selected from the system file explorer can be opened by dragging and dropping into the central area of Raphaview.


Attachments : Dicom 이 아닌 excel,  3D (OBJ, FBX, STL, etc.), jpeg 등의 모든 형태의 파일


With DICOM DIR: CD 안의 데이터 상관없이 모두
Without DICOM DIR: DICOM규격에 맞는 데이터만


Empty central panel: Any files than ca be open by one of the viewers (e.g. standard images such as TIFF, PNG, JPEG…)
DICOM Explorer and DICOM viewers (SR, AU, MPR, 2D and 3D) in the central panel: Only DICOM files. Opens the default viewer according to the files.
File association
Dicom files can be opened by double-clicking them from the system file explorer.

 Note
On Windows only the files with the extension “.dcm” are associated with Raphaview. With other systems DICOM without extension are associated with Raphaview.



How to import DICOM files
I-one Raphaview can open DICOM files from various ways and sources: drag and drop, local device, DICOM ZIP, DICOM CD/DVD, DICOM Query/Retrieve, and from commands locally or remotely.

 Note
An popup error message is displayed when DICOM files cannot be read (from v4.3.0) or when a network error occurs. In the latter case a message asking to download again the missing files.

From the system file explorer

Drag and drop
Files or folders selected from the system file explorer can be opened by dragging and dropping into the central area of Raphaview.


Attachments : Dicom 이 아닌 excel,  3D (OBJ, FBX, STL, etc.), jpeg 등의 모든 형태의 파일

With DICOM DIR: CD 안의 데이터 상관없이 모두
Without DICOM DIR: DICOM규격에 맞는 데이터만

![](dragdrop.png)

아래 세 가지 경우에만 Drag&Drop 이 가능합니다.

1. 폴더 안에 DICOM 폴더와 DICOMDIR이 있는 경우 

2. DICOM 폴더인 경우

3. 복수의 파일을 선택한 경우


------

Basic DICOM Directory 란?


DICOM DIR: 파일 셋을 식별하기 위해 파일셋 엑세스 용이하기 위해 만들어낸 것

DICOM 파일 셋을 식별하기 위해 그리고 그 파일 셋의 DICOM 파일들내에 저장된 정보의 엑세스를 용이하게 하기 위해, DICOM 표준은 정의된 기본 디렉토리 IOD를 갖고 있습니다. DICOM 파일 셋은 하나 또는 그 이상의 DICOM 파일들을 포함합니다. 그 파일 셋내에 포함된 파일들중 하나는 DICOMDIR 파일입니다. DICOMDIR 파일은 파일 셋내의 다른 DICOM 파일들내에 포함되어 있는 정보를 쉽게 엑세스할 수 있도록 하기 위해, DICOM 디렉토리 정보를 포함하고 있습니다. 파일
셋내의 DICOM 파일들은 할당된 파일 ID들입니다; 따라서, 이들은 DICOMDIR의 파일 ID에 의해 식별되며, DICOMDIR 파일에 의해 참조될 수 있습니다.

DICOM 디렉토리 데이타 셋들은 키 요소들로 일컫는 특수 데이타 요소를 포함할 수 있습니다. 키 요소는 데이타 셋내의 다른 키 요소들 및 데이타 셋 내부의 상대 위치에 대한 특수 정보를 포함하고 있는 하나의 데이타 요소입니다. 키 요소내에 저장된 특수 정보는 키 요소 자식들, 일반 요소 자식들, 부모 키 요소들 그리고, 요소들간의 논리적 상관관계들에 대한 정보를 보존합니다.

LEADTOOLS는 하나의 트리로 DICOMDIR 데이타 셋을 보존합니다; 그러나, 모든 키 요소들은 그 트리의 동일한 레벨에 저장됩니다. LEADTOOLS는 DICOM 디렉토리 데이타 셋의 검색, 데이타 셋을 통한 기동, 키 요소들의 삽입 및 삭제 그리고, 키 요소들의 조작을 위한 특수 함수들을 제공합니다.


### DICOMDIR의 구조

- FileSet
- Patient
- Study
- Series
- Image

이며 DICOMDIR이 속해있는 폴더에 실제 존재하는 DICOM 폴더 및 파일들의 구조 및 정보를 제공합니다. With DICOM DIR 모드로 업로드할 경우 DICOMDIR의 구조와 실제 존재하는 폴더 및 파일을 비교하여 DICOMDIR엔 포함되어 있지만 실제로 존재하지 않는 파일의 경우 해당 파일을 제외하여 DICOMDIR에 있고 실제로도 존재하는 파일만 업로드하게 했습니다. 만약 DICOMDIR의 정보와 실제 파일의 존재 여부가 동일하다면 바로 업로드됩니다. 또한 DICOMDIR이 같이 업로드 되었을 경우 화면에 보여지는 트리는 DICOMDIR 이 제공해주는 정보이지만 실제 업로드되는 파일은 DICOMDIR 폴더가 속해있는 폴더에 존재하는 실제 DICOM 파일입니다.

-----

 DICOMDIR 파일은 파일 셋내의 다른 DICOM 파일들내에 포함되어 있는 정보를 쉽게 엑세스할 수 있도록 

Empty central panel: Any files than ca be open by one of the viewers (e.g. standard images such as TIFF, PNG, JPEG…)
DICOM Explorer and DICOM viewers (SR, AU, MPR, 2D and 3D) in the central panel: Only DICOM files. Opens the default viewer according to the files.
File association
Dicom files can be opened by double-clicking them from the system file explorer.

 Note
On Windows only the files with the extension “.dcm” are associated with Raphaview. With other systems DICOM without extension are associated with Raphaview.







