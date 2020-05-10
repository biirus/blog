type FileInfo = {
  date: string;
  title: string;
  url: string;
  tags: string[];
  description?: string;  
};

type DirInfo = {
  title: string;
};

type Dir = {
  files: Array<FileInfo | Dir>;
  isDir: boolean;
  info: DirInfo;
};

type Page = {
  content: string;
  meta: FileInfo;
};
