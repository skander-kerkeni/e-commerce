FROM mongo 

WORKDIR /usr/src/configs

COPY replicaSet.js .
COPY setup.sh .

ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]