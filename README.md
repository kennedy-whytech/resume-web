# resume-web
The repo is to give you a sample of how to create a resume web docker image via a Jenkins server. Note that it's not compulsory to setup the automation(Jenkins), in order to build the image. To do it locally:
```
docker build -t {your_repo}/resume-nginx .
docker run {your_repo}/resume-nginx -p 30001:30001
```

To efficiently deploy the docker image in K8S, I have another repo to achieve that with Helm. https://github.com/kennedy-whytech/resume-nginx-helm
