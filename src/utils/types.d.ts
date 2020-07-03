type FileInfo = {
  date: string;
  title: string;
  url: string;
  tags: string[];
  description?: string;
};

type Page = {
  content: string;
  meta: FileInfo;
};
