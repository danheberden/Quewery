java -jar lib/JsTestDriver-1.2.2-custom.jar --config "quewery.conf" --browser "lib/launch-safari.sh" --tests all --port 8081
osascript -e 'tell application "Safari" to quit' > /dev/null 2>&1