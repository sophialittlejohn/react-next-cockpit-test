FROM node:9.2.0

# SSH Server
RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    libssl-dev \
    openssh-server

RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /app

WORKDIR /app

COPY ./app/package.json /app
COPY ./app/package-lock.json /app
COPY ./app/yarn.lock /app

RUN npm install yarn -g
RUN yarn install --frozen-lockfile
RUN npm install -y

COPY ./app /app

RUN npm run build