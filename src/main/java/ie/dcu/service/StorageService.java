package ie.dcu.service;

import org.apache.commons.io.FileUtils;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class StorageService {
    private String uploadPathString = "/home/cillian/uploads/";

    private Path uploadPath;

    public StorageService() {

        this.uploadPath = Paths.get(uploadPathString);
    }

    private List<File> getFileList() {
        File f = new File(uploadPathString);
        if (f.exists())
            return new ArrayList<>(Arrays.asList(f.listFiles()));
        else
            return Collections.emptyList();
    }

    public String saveData(String data) {
        String name = getUUID();
        String path = uploadPathString + name;

        try (Writer writer = new BufferedWriter(new OutputStreamWriter(
                new FileOutputStream(path), "utf-8"))) {
            writer.write(data);
        } catch (IOException e) {
            return null;
        }
        return path;
    }

    private String getUUID() {
        return UUID.randomUUID().toString();
    }

    public String loadData(String filePath) {
        StringBuilder resultStringBuilder = new StringBuilder();
        try (BufferedReader br
                     = new BufferedReader(new InputStreamReader(new FileInputStream(filePath)))) {
            String line;
            while ((line = br.readLine()) != null) {
                resultStringBuilder.append(line).append("\n");
            }
        } catch (IOException e) {
            return null;
        }
        return resultStringBuilder.toString();
    }

    public void deleteAll() {
        try {
            FileUtils.deleteDirectory(uploadPath.toFile());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void init() {
        try {
            deleteAll();
            Files.createDirectories(uploadPath);
        } catch (IOException e) {
        }
    }
}
