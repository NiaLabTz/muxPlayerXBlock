"""Setup for muxplayerXBlock."""

import os
from setuptools import setup


def package_data(pkg, root):
    """Generic function to find package_data for `pkg` under `root`."""
    data = []
    for dirname, _, files in os.walk(os.path.join(pkg, root)):
        for fname in files:
            data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


setup(
    name='muxplayer-xblock',
    version='0.1',
    description='XBlock to use the Mux player in edX, instead of the default one.',
    packages=[
        'muxplayer',
    ],
    install_requires=[
        'XBlock',
    ],
    entry_points={
        'xblock.v1': [
            'muxplayer = muxplayer:muxplayerXBlock',
        ]
    },
    package_data=package_data("muxplayer", "static"),
)
