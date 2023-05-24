FROM public.ecr.aws/lambda/nodejs:14

RUN yum install -y \
    glib2 \
    glibc \
    glibc-all-langpacks \
    glibc-common \
    glibc-minimal-langpack \
    libcrypt \
    bzip2-libs

ENV LD_LIBRARY_PATH=/var/task/node_modules/canvas/build/Release;$LD_LIBRARY_PATH;
# Copy function code
COPY . ${LAMBDA_TASK_ROOT}
RUN npm install

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]